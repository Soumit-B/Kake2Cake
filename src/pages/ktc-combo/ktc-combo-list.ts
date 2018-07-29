import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KtcTableComponent } from "../../components/ktc-table/ktc-table";

import { ADMIN_API_LIST } from "../../constants/constant";
import { KtcBaseComponent } from '../../components/ktc-base/ktc-base';
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

import { KtcComboPage } from "./ktc-combo";

/**
 * Generated class for the KtcComboPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ktc-combo-list',
  templateUrl: 'ktc-combo-list.html',
})
export class KtcComboListPage extends KtcBaseComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService) {
    super(navCtrl, navParams, ktcBaseService);

    this.getAPIName = ADMIN_API_LIST.GET_KTC_COMBO_LIST;
    this.deleteAPIName = ADMIN_API_LIST.DELETE_KTC_COMBO;
    
  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter KtcComboListPage');
    this.displayListOfData();
  }

  public crudEventHandler = (event: any): void => {
    if(event.eventType == "add" || event.eventType == "edit"){
        this.navCtrl.push(KtcComboPage, {itemID: event.row.ID});
        // this.navCtrl.setRoot(ProductTypePage, {item: event.row});
    }else{
        console.log(event);
        this.deleteEventHandler(event.row);
    }
}

}
