import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KtcTableComponent } from "../../components/ktc-table/ktc-table";

import { BASE_URL, API_LIST } from "../../constants/constant";
import { KtcBaseComponent } from '../../components/ktc-base/ktc-base';
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

import { KtcProductsPage } from "./ktc-products";


@Component({
  selector: 'page-ktc-products-list',
  templateUrl: 'ktc-products-list.html'
})
export class KtcProductsListPage extends KtcBaseComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService) {
    super(navCtrl, navParams, ktcBaseService);

    this.APIName = API_LIST.GET_KTC_PRODUCT_LIST;
    this.displayListOfData();
    
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProductTypePage');
  }

  public crudEventHandler = (event: any): void => {
      // console.log(event);
      if(event.eventType == "add" || event.eventType == "edit"){
          this.navCtrl.push(KtcProductsPage,{item: event.row});
          // this.navCtrl.setRoot(ProductTypePage);
      }
  }

}
