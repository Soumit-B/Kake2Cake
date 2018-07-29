import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KtcTableComponent } from "../../components/ktc-table/ktc-table";

import { BASE_URL, ADMIN_API_LIST } from "../../constants/constant";
import { KtcBaseComponent } from '../../components/ktc-base/ktc-base';
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

import { KtcItemsPage } from "./ktc-items";

/**
 * Generated class for the KtcItemsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ktc-items-list',
  templateUrl: 'ktc-items-list.html',
})
export class KtcItemsListPage extends KtcBaseComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService) {
      super(navCtrl, navParams, ktcBaseService);

      this.getAPIName = ADMIN_API_LIST.GET_KTC_ITEMS_LIST;
      this.deleteAPIName = ADMIN_API_LIST.DELETE_KTC_ITEMS;
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter ProductTypePage');
    this.displayListOfData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KtcItemsPage');
  }

  public crudEventHandler = (event: any): void => {
    // console.log(event);
    if(event.eventType == "add" || event.eventType == "edit"){
        this.navCtrl.push(KtcItemsPage,{itemID: event.row.ID});
        // this.navCtrl.setRoot(ProductTypePage);
    }else{
        console.log(event);
        this.deleteEventHandler(event.row);
    }
}


}
