import { Component, state } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { KtcBaseComponent } from "../../components/ktc-base/ktc-base";
import { KtcAddFormComponent } from "../../components/ktc-add-form/ktc-add-form";
import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";
import { KTCCompanyService } from "./company.services";

import { ADMIN_API_LIST } from "../../constants/constant";

/**
 * Generated class for the CompanyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-company',
  templateUrl: 'company.html',
  providers: [KtcBaseService, KTCCompanyService]
})
export class CompanyPage extends KtcBaseComponent {

  public cityList: Array<any> = [];
  public stateList: Array<any> = [];
  public countryList: Array<any> = [];

  public formFields: Array<any> = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, public ktcBaseService: KtcBaseService, private ktcCompanyService: KTCCompanyService) {
      super(navCtrl, navParams, ktcBaseService);

      this.addAPIName = ADMIN_API_LIST.INSERT_KTC_COMPANY;
      this.updateAPIName = ADMIN_API_LIST.UPDATE_KTC_COMPANY;
      this.getDetailsAPIName = ADMIN_API_LIST.GET_KTC_COMPANY_DETAILS;

      this.ktcCompanyService.getCountryList()
      .subscribe((data) => {
          if(data.length>0){
            data.map((obj) => {
                this.countryList.push({id: obj.CountryID, name: obj.CountryName});
            });
          }
          
      });

      this.formFields = [
        {type: 'text', label: 'Company Name', name: 'CompanyName'},
        {type: 'text', label: 'Company Type', name: 'CompanyType'},
        {type: 'text', label: 'Branch Name', name: 'CompanyBranch'},
        {type: 'text', label: 'Branch Address', name: 'AddressLine1'},
        {type: 'select', label: 'Country', name: 'CountryID', options: this.countryList},
        {type: 'select', label: 'State', name: 'StateID', options: this.stateList},
        {type: 'select', label: 'City', name: 'CityID', options: this.cityList},
        {type: 'text', label: 'Pincode', name: 'PinCode'}
      ]
  }

  ionViewWillEnter(){
    if(this.itemID){
      this.fetchData(this.itemID)
      .subscribe(data => {
            this.formData = {type: "Update", data};

            if(this.formData.data && this.formData.data.CountryID){
              this.getStateList(this.formData.data.CountryID);
            }
            
            if(this.formData.data && this.formData.data.StateID){
              this.getCityList(this.formData.data.StateID);
            }
      });
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CompanyPage ',this.formData);
    
  }

  public updateDropdownEv = (updateDropdownEv: any): void => {
      console.log(updateDropdownEv);
      if(updateDropdownEv.selectedVal == 'CountryID'){
          this.getStateList(updateDropdownEv.value);
      }else if(updateDropdownEv.selectedVal == 'StateID'){
          this.getCityList(updateDropdownEv.value);
    }
  }

  public getStateList = (CountryID: number): void => {
    this.ktcCompanyService.getStateList(CountryID)
    .subscribe(data => {
      if(data.length>0){
        data.map((obj) => {
            this.stateList.push({id: obj.StateID, name: obj.StateName});
        });
      }
    });
  }

  public getCityList = (StateID: number) : void => {
    this.ktcCompanyService.getCityList(StateID)
        .subscribe(data => {
          if(data.length>0){
            data.map((obj) => {
                this.cityList.push({id: obj.CityID, name: obj.CityName});
            });
          }
        });
  }

 }
