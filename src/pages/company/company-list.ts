import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { KtcTableComponent } from "../../components/ktc-table/ktc-table";

import { ICompanyList } from "./company-list.model";

import { BASE_URL, ADMIN_API_LIST } from "../../constants/constant";
import { KtcBaseComponent } from '../../components/ktc-base/ktc-base';
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";
import { CompanyPage } from "./company";

// import { ProductTypeService } from "./product-type.services";

// import { ProductTypePage } from "./product-type";

/**
 * Generated class for the ProductTypePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-company-list',
  templateUrl: 'company-list.html'
})
export class CompanyListPage extends KtcBaseComponent {

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService) {
    super(navCtrl, navParams, ktcBaseService);
    
    this.getAPIName = ADMIN_API_LIST.GET_COMPANY_LIST;
    this.deleteAPIName = ADMIN_API_LIST.DELETE_KTC_COMPANY;

  }

  ionViewWillEnter(){
    console.log('ionViewWillEnter ProductTypePage');
    this.displayListOfData();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyListPage');
  }

  public crudEventHandler = (event: any): void => {
      console.log(event);
      if(event.eventType == "add" || event.eventType == "edit"){
          this.navCtrl.push(CompanyPage,{itemID: event.row.ID});
          // this.navCtrl.setRoot(ProductTypePage);
      }else{
        console.log(event);
        this.deleteEventHandler(event.row);
      }
  }

}
