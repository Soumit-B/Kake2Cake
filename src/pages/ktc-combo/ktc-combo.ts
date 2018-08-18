import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { KtcBaseComponent } from "../../components/ktc-base/ktc-base";
import { KtcAddFormComponent } from "../../components/ktc-add-form/ktc-add-form";
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";
import { KtcComboService } from "./ktc-combo.services";

import { ADMIN_API_LIST } from "../../constants/constant";

/**
 * Generated class for the KtcComboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ktc-combo',
  templateUrl: 'ktc-combo.html',
  providers: [KtcBaseService, KtcComboService]
})
export class KtcComboPage extends KtcBaseComponent {

  public formFields: Array<any> = [];
  public productTypeList: Array<any> = [];
  public productList: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService, public ktcComboService: KtcComboService) {
    super(navCtrl, navParams, ktcBaseService);
      this.addAPIName = ADMIN_API_LIST.INSERT_KTC_COMBO;
      this.updateAPIName = ADMIN_API_LIST.UPDATE_KTC_COMBO;
      this.getDetailsAPIName = ADMIN_API_LIST.GET_KTC_COMBO_DETAILS;

      this.getProductTypeListForComobo();

      this.formFields = [
        {type: 'other', label: 'Combo Details', name: 'ComboDetails', items: {}, options:[
            {type: 'text', label: 'Comboname', name: 'Comboname'}
        ]},
        {type: 'other', label: 'Combo List', name: 'comboItemList',items:[{}], options: [
          {type: 'select', label: 'Product Type', name: 'ProductTypeID', options: this.productTypeList, cols: 1, rows: 1, color: 'lightblue'},
          {type: 'select', label: 'Product List', name: 'ItemTypeID', options: this.productList, cols: 1, rows: 1, color: 'lightgreen'}
        ]}
      ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KtcComboPage');
  }

  ionViewWillEnter(){
    if(this.itemID){
      this.fetchData(this.itemID)
      .subscribe(data => {
            this.formData = {type: "Update", data};
      });
    }
  }

  public updateDropdownEv = (updateDropdownEv: any): void => {
      //console.log(updateDropdownEv);
      if(updateDropdownEv.selectedVal == 'comboItemList.ProductTypeID'){
        this.getProductListForComobo(updateDropdownEv.value);
      }
  }

  public getProductTypeListForComobo = () => {
      this.ktcComboService.getProductTypeListForComobo()
      .subscribe((data) => {
        if(data.length>0){
          data.map((obj) => {
              this.productTypeList.push({id: obj.ProductTypeID, name: obj.ProductTypeName});
          });
        } 
    });
  }

  public getProductListForComobo = (productID: number) => {
    this.productList.length = 0;
    this.ktcComboService.getProductListForComobo(productID)
    .subscribe((data) => {
      if(data.length>0){
        data.map((obj) => {
            this.productList.push({id: obj.ItemTypeID, name: obj.ItemDetails});
        });
      } 
  });
}

}
