import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { KtcBaseComponent } from "../../components/ktc-base/ktc-base";
import { KtcAddFormComponent } from "../../components/ktc-add-form/ktc-add-form";
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";
import { KtcItemsService } from "./ktc-items.services";

import { ADMIN_API_LIST } from "../../constants/constant";

/**
 * Generated class for the KtcItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ktc-items',
  templateUrl: 'ktc-items.html',
  providers: [KtcBaseService, KtcItemsService]
})
export class KtcItemsPage extends KtcBaseComponent {

  public producTypeList: Array<any> = [];
  public productNamesList: Array<any> = [];
  public companyList: Array<any> = [];
  public formFields: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService, public ktcItemsService: KtcItemsService) {

    super(navCtrl, navParams, ktcBaseService);
      this.addAPIName = ADMIN_API_LIST.INSERT_KTC_ITEMS;
      this.updateAPIName = ADMIN_API_LIST.UPDATE_KTC_ITEMS;
      this.getDetailsAPIName = ADMIN_API_LIST.GET_KTC_ITEMS_DETAILS;

      this.getProductTypeList();
      this.getCompanyList();

      this.formFields = [
        {type: 'select', label: 'Product Type', name: 'ProductTypeID', options: this.producTypeList},
        {type: 'select', label: 'Product Name', name: 'ProductID', options: this.productNamesList},
        {type: 'select', label: 'Company Name', name: 'CompanyID', options: this.companyList},
        {type: 'select', label: 'Eggless', name: 'Eggless', options: [{id: true, name: 'Yes'}, {id: false, name: 'Nos'}]},
        {type: 'text', label: 'Weight', name: 'Weight'},
        {type: 'text', label: 'Price', name: 'Price'},
        {type: 'text', label: 'Description', name: 'Description'},
        {type: 'select', label: 'In Stock', name: 'InStock', options: [{id: true, name: 'Yes'}, {id: false, name: 'No'}]}
      ];
  }

  ionViewWillEnter(){
    if(this.itemID){
      this.fetchData(this.itemID)
      .subscribe(data => {
            this.formData = {type: "Update", data};

            if(this.formData.data && this.formData.data.ProductID){
              this.getProductNamesList(this.formData.data.ProductID);
            }

      });
    }
  }

  public getProductTypeList = (): void => {
    this.ktcItemsService.getProductTypeList()
      .subscribe((data) => {
          if(data.length>0){
            data.map((obj) => {
                this.producTypeList.push({id: obj.ProductTypeID, name: obj.ProductTypeName});
            });
          } 
      });
  }

  public getCompanyList = (): void => {
    this.ktcItemsService.getCompanyList()
      .subscribe((data) => {
          if(data.length>0){
            data.map((obj) => {
                this.companyList.push({id: obj.CompanyID, name: obj.CompanyName});
            });
          }
          
      });
  }

  public updateDropdownEv = (updateDropdownEv: any): void => {
    //console.log(updateDropdownEv);
    if(updateDropdownEv.selectedVal == 'ProductTypeID'){
        this.getProductNamesList(updateDropdownEv.value);
    }
}

  public getProductNamesList = (itemID: number): void => {
    this.productNamesList.length = 0;
    this.ktcItemsService.getProductNamesList(itemID)
      .subscribe((data) => {
          if(data.length>0){
            data.map((obj) => {
                this.productNamesList.push({id: obj.ProductID, name: obj.ProductName});
            });
          }
          
      });
  }

}
