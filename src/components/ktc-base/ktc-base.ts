import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KtcAddFormComponent } from "../ktc-add-form/ktc-add-form";
import { KtcBaseService } from "./ktc-base.services";

import { BASE_URL, ADMIN_API_LIST } from "../../constants/constant";

/**
 * Generated class for the KtcBaseComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ktc-base',
  templateUrl: 'ktc-base.html',
  providers: [KtcBaseService]
})
export class KtcBaseComponent {

  public BaseURL: string = BASE_URL.DOMAIN+":"+BASE_URL.PORT;
  public getAPIName: string;
  public addAPIName: string;
  public updateAPIName: string;
  public deleteAPIName: string;
  public getDetailsAPIName: string;

  public ktcTableList: any;

  public formData: any = {type: "Save", data:{}};
  public pageType: String = "Add";
  public param: any = {};
  public formFields: Array<any> = [];
  
  protected itemID: number;

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService) {
    if(this.navParams.get('itemID')){
        this.pageType = "Edit";
        this.itemID = this.navParams.get('itemID');
        //this.fetchData(this.itemID);
    }
  }

  public displayListOfData = (): void => {
    let API_URL = this.BaseURL+this.getAPIName;
    this.ktcBaseService.getTableList(API_URL)
    .subscribe(data => this.ktcTableList = data);
  }

  public fetchData = (itemID: number): any => {
    if(itemID){
      let API_URL = this.BaseURL+this.getDetailsAPIName;
      
      return this.ktcBaseService.getItemDetails(API_URL,itemID);
    }
  }

  public saveEventHandler = (event: any): void => {
      console.log("saveEventHandler from base ", event);
      if(this.pageType == 'Edit'){

          event.formData.ModifiedBy = "TestUser";

          let API_URL = this.BaseURL+this.updateAPIName;
          this.ktcBaseService.InsertOrUpdateData(API_URL, event.formData)
          .subscribe(data => {
              if(data.StatusCode == 1){
                alert(data.StatusMessage);
                this.navCtrl.pop();
              }else{
                  alert(data.StatusMessage);
              }
          });
          
      }else if(this.pageType == 'Add'){

          event.formData.CreatedBy = "TestUser";

          let API_URL = this.BaseURL+this.addAPIName;
          this.ktcBaseService.InsertOrUpdateData(API_URL,event.formData)
          .subscribe(data => {
              if(data.StatusCode == 1){
                alert(data.StatusMessage);
                this.navCtrl.pop();
              }else{
                  alert(data.StatusMessage);
              }
          });

      }else{
          console.log("Invalid Operation!!!");
      }
  }

  public deleteEventHandler = (row: any) : void => {

    let API_URL = this.BaseURL+this.deleteAPIName;
    this.ktcBaseService.deleteData(API_URL,row.ID)
    .subscribe(data => {
        if(data.StatusCode == 1){
            alert(data.StatusMessage);
            this.navCtrl.setRoot(this.navCtrl.getActive().component);
        }else{
            alert(data.StatusMessage);
        }
    });
  }

  /*public getTableList = (): any => {
      this.ktcBaseService.getTableList(this.BaseURL);
  }*/

}
