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
    @Output() updateDropdownEv = new EventEmitter<any>();

    private addForm: FormGroup;
    private formControlObj: any = {};
    private subFormCtrlObj: any = {};
    public comboItemListArr: Array<any> = [{},{}];

    constructor() {}

    ngOnChanges(){
            /**
             * Generate all the fields in html based on `formFields` @input variable.
             */

            if(this.formFields.length > 0){
                this.formControlObj = this.generateForm(this.formFields);

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
                    let fldObj = fieldObj.name.split('.');
                    if(fldObj.length > 1){
                        this.addForm.controls[fieldObj.name].setValue(this.formData.data[fieldObj.name]);
                        // console.log(this.addForm.controls);
                        // console.log(fieldObj);
                    }else{
                        this.addForm.controls[fieldObj.name].setValue(this.formData.data[fieldObj.name]);
                    }
                })
                // this.addForm.controls['productTypeName'].setValue(this.formData.data.ListName);
            }
            console.log("Add form : ", this.addForm);
    }

    public generateForm = formFields => {
        let formControlObj = formFields.reduce((finalObj: any, fieldObj:any) => {
            console.log(fieldObj);
            if(fieldObj.type == 'other'){
                if(fieldObj.items instanceof Array){
                    finalObj[fieldObj.name] = new FormArray([]);
                    console.log('other ', fieldObj.items instanceof Array);
                    let subFormControlObj = this.generateForm(fieldObj.options);
                    console.log("generateForm ",subFormControlObj.ItemTypeID.value);
                    this.subFormCtrlObj = Object.assign({}, subFormControlObj);
                    finalObj[fieldObj.name].push(new FormGroup(subFormControlObj));
                }else{
                    let subFormControlObj = this.generateForm(fieldObj.options);
                    finalObj[fieldObj.name] = new FormGroup(subFormControlObj);
                }
                
            }else if(fieldObj.type == 'checkbox'){
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
        console.log("formControlObj ",formControlObj);
        return formControlObj;
    }

    public initComboItemList = (subFormControlObj: any) => {
        console.log("subFormControlObj ",subFormControlObj);
        let comboItemList = subFormControlObj.options.reduce((finalArr: Array<any>, opt: any) => {
            finalArr[opt.label] = new FormControl();
            return finalArr;
        },[]);
        console.log("comboItemList ", comboItemList);
        return comboItemList;
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
        let $thisFormdata = this.formData.data;
        let $thisAddForm = this.addForm.value;

        /**
         * assign updated value to the original formdata
         */
        Object.keys(this.addForm.value).forEach(function(key) {
                $thisFormdata[key] = $thisAddForm[key];
        });

        this.saveEvent.emit({formData: $thisFormdata});
    }
  
    public matSelectChangeEV = (selectedVal: any, parentIndex: number): void => {
        let splitSelectValue = selectedVal.split('.');
        let updatedValue;
        if(splitSelectValue.length > 1){
            /* console.log(parentIndex, "if selectChange : ", selectedVal, this.addForm.controls[splitSelectValue[0]]['controls'][parentIndex]['controls'][splitSelectValue[1]].value);
            updatedValue = this.addForm.controls[splitSelectValue[0]]['controls'][parentIndex]['controls'][splitSelectValue[1]].value;*/

            console.log(parentIndex, this.addForm.value[splitSelectValue[0]][parentIndex][splitSelectValue[1]]);
            updatedValue = this.addForm.value[splitSelectValue[0]][parentIndex][splitSelectValue[1]];

            this.addForm.value[splitSelectValue[0]][parentIndex][splitSelectValue[1]] = updatedValue;
        }else{
            console.log("else selectChange : ", selectedVal, this.addForm.controls[selectedVal].value);
            updatedValue = this.addForm.controls[selectedVal].value;
        }

        console.log("obj : ", this.addForm.value.comboItemList);
        
        this.updateDropdownEv.emit({selectedVal, value: updatedValue});
    }

    public addComboItem = (event: Event) : void => {
        event.preventDefault();
        let indeX = this.formFields.findIndex(obj => obj.type == 'other' && obj.items instanceof Array);
        this.formFields[indeX].items.push({});

        console.log(this.addForm.controls.comboItemList);
        let control = <FormArray>this.addForm.controls.comboItemList;
        console.log("addComboItem ",this.subFormCtrlObj.ItemTypeID.value);
        control.push(new FormGroup(this.subFormCtrlObj));
        console.log("new ", this.addForm.controls.comboItemList);
    }

    public removeComboItem = (event: Event, rowIndex: number) : void => {
        event.preventDefault();
        let indeX = this.formFields.findIndex(obj => obj.type == 'other' && obj.items instanceof Array);
        this.formFields[indeX].items.splice(rowIndex,1);
        this.addForm.value.comboItemList.splice(rowIndex,1);
    }

}
