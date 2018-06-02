import { Component, Input, Output, EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormArray } from '@angular/forms';

/**
 * Generated class for the KtcAddFormComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ktc-add-form',
  templateUrl: 'ktc-add-form.html'
})
export class KtcAddFormComponent {

  @Input('formFields') formFields: any;
  @Input('formData') formData: any;
  @Output() saveEvent = new EventEmitter<any>();

  private addForm: FormGroup;
  private formControlObj: any = {};

  constructor() {}

  ngOnChanges(){
        /**
         * Generate all the fields in html based on `formFields` @input variable.
         */

        if(this.formFields.length > 0){
            this.formControlObj = this.formFields.reduce((finalObj: any, fieldObj:any) => {
                if(fieldObj.type == 'checkbox'){
                    let checkboxArr = fieldObj.options.reduce((finalArr: Array<any>, opt: any) => {
                        finalArr[opt.label] = new FormControl();
                        return finalArr;
                    },[]);
                    finalObj[fieldObj.name] = new FormArray(checkboxArr);
                }else{
                    finalObj[fieldObj.name] = new FormControl();
                }
                return finalObj;
            }, {});

            this.addForm = new FormGroup(this.formControlObj);
        }


        /**
         * Set predefined value for each field.
         * This is used only for edit purpose.
         */

        // console.log("ngOnChanges : ",this.formData);
        if(Object.keys(this.formData.data).length > 0){
            // console.log(this.formFields);
            this.formFields.map((fieldObj: any) => {
                this.addForm.controls[fieldObj.name].setValue(this.formData.data[fieldObj.name]);
            })
            // this.addForm.controls['productTypeName'].setValue(this.formData.data.ListName);
        }
  }

  public updateCheckBoxControl = (checkBoxValue: string, isChecked: boolean, fieldName: string): void => {
        const chkArray = <FormArray>this.addForm.get(fieldName);

        if (isChecked) {
            chkArray.push(new FormControl(checkBoxValue));
        } else {
            let idx = chkArray.controls.findIndex(x => x.value == checkBoxValue);
            chkArray.removeAt(idx);
        }
  }

  public saveEventHandler = (event: Event): void => {
      event.preventDefault();
      this.saveEvent.emit({formData: this.addForm.value});
  }
  
}
