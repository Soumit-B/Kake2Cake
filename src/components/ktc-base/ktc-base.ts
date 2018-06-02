import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KtcAddFormComponent } from "../ktc-add-form/ktc-add-form";
import { KtcBaseService } from "./ktc-base.services";

import { BASE_URL, API_LIST } from "../../constants/constant";

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
  public APIName: string;

  public ktcTableList: any;

  public formData: any = {type: "Save", data:{}};
  public pageType: String = "Add";
  public param: any = {};
  public formFields: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService) {
    if(this.navParams.get('item') && Object.keys(this.navParams.get('item')).length > 0){
        this.pageType = "Edit";
        this.param = this.navParams.get('item');
        this.fetchData(this.param);
    }
  }

  public displayListOfData = (): void => {
    let API_URL = this.BaseURL+this.APIName;
    this.ktcBaseService.getTableList(API_URL)
    .subscribe(data => this.ktcTableList = data);
  }

  public fetchData = (id: any): void => {
      // console.log("Fetch record to update for ",id);
      this.formData = {type: "Update", data:id};
  }

  public saveEventHandler = (event: any): void => {
      // console.log("saveEventHandler from base ", event);
      this.navCtrl.pop();
  }

  public getTableList = (): any => {
      this.ktcBaseService.getTableList(this.BaseURL);
  }

}
