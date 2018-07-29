import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { KtcBaseComponent } from "../../components/ktc-base/ktc-base";
import { KtcAddFormComponent } from "../../components/ktc-add-form/ktc-add-form";
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";
import { KtcProductsService } from "./ktc-products.services";

import { ADMIN_API_LIST } from "../../constants/constant";

/**
 * Generated class for the KtcProductsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ktc-products',
  templateUrl: 'ktc-products.html',
  providers: [KtcBaseService, KtcProductsService]
})
export class KtcProductsPage extends KtcBaseComponent{

  public producTypeList: Array<any> = [];
  public formFields: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService, private ktcProductsService: KtcProductsService) {
      super(navCtrl, navParams, ktcBaseService);
      this.addAPIName = ADMIN_API_LIST.INSERT_KTC_PRODUCT;
      this.updateAPIName = ADMIN_API_LIST.UPDATE_KTC_PRODUCT;
      this.getDetailsAPIName = ADMIN_API_LIST.GET_KTC_PRODUCT_DETAILS;

      this.ktcProductsService.getProductTypeList()
      .subscribe((data) => {
          if(data.length>0){
            data.map((obj) => {
                this.producTypeList.push({id: obj.ProductTypeID, name: obj.ProductTypeName});
            });
          }
          
      });

      this.formFields = [
        {type: 'text', label: 'Product Name', name: 'ProductName'},
        {type: 'select', label: 'Product Type', name: 'ProductTypeID', options: this.producTypeList}
      ];
  }

  ionViewWillEnter(){
    if(this.itemID){
      this.fetchData(this.itemID)
      .subscribe(data => {
            this.formData = {type: "Update", data};
      });
    }
  }

}
