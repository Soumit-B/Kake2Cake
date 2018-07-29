import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { KtcBaseComponent } from "../../components/ktc-base/ktc-base";
import { KtcAddFormComponent } from "../../components/ktc-add-form/ktc-add-form";
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

import { ADMIN_API_LIST } from "../../constants/constant";

/**
 * Generated class for the KtcEventPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-ktc-event',
  templateUrl: 'ktc-event.html',
  providers: [KtcBaseService]
})
export class KtcEventPage extends KtcBaseComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService) {
    super(navCtrl, navParams, ktcBaseService);
      this.addAPIName = ADMIN_API_LIST.INSERT_KTC_ITEMS;
      this.updateAPIName = ADMIN_API_LIST.UPDATE_KTC_ITEMS;
      this.getDetailsAPIName = ADMIN_API_LIST.GET_KTC_ITEMS_DETAILS;

      this.formFields = [
        {type: 'text', label: 'Event Name', name: 'EventName'}
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
