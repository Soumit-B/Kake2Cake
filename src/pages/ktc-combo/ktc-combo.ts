import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { KtcBaseComponent } from "../../components/ktc-base/ktc-base";
import { KtcAddFormComponent } from "../../components/ktc-add-form/ktc-add-form";
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

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
  providers: [KtcBaseService]
})
export class KtcComboPage extends KtcBaseComponent {

  public formFields: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService) {
    super(navCtrl, navParams, ktcBaseService);
      this.addAPIName = ADMIN_API_LIST.INSERT_KTC_COMBO;
      this.updateAPIName = ADMIN_API_LIST.UPDATE_KTC_COMBO;
      this.getDetailsAPIName = ADMIN_API_LIST.GET_KTC_COMBO_DETAILS;

      this.formFields = [
        {type: 'text', label: 'Combo Name', name: 'ComboDetails.ComboName'},
        {type: 'select', label: 'Product Type', name: 'ProductTypeID', options: []}	
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

}
