import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KtcBaseComponent } from "../../components/ktc-base/ktc-base";
import { KtcAddFormComponent } from "../../components/ktc-add-form/ktc-add-form";
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

/**
 * Generated class for the ProductTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-product-type',
  templateUrl: 'product-type.html',
  providers: [KtcBaseService]
})
export class ProductTypePage extends KtcBaseComponent {

  foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];

  public formFields: Array<any> = [
      {type: 'text', label: 'Product Type Name', name: 'ListName'},
    //   {type: 'checkbox', label: '', name: 'pt1', options:[{label: 'Checked', value: 'Checked'}, {label: 'Indeterminate', value: 'Indeterminate'}]},
    //   {type: 'radio', name: 'pt2', label: 'Align', options:[{label: 'After', value: 'After', name: 'pt21'}, {label: 'Before', value: 'Before', name: 'pt22'}]},
    //   {type: 'select', label: 'Favorite food', name: 'pt3', options: this.foods}
  ];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService) {
      super(navCtrl, navParams, ktcBaseService);      
  }

  ionViewDidLoad() {
    //   console.log('ionViewDidLoad ProductTypePage');
  }

}
