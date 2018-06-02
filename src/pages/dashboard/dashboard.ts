import { Component } from '@angular/core';
import { NavController, NavParams, App } from 'ionic-angular';

import { AuthenticationService } from "../../common/services/authentication.service";

/**
 * Generated class for the DashboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-dashboard',
  templateUrl: 'dashboard.html',
  providers: [AuthenticationService]
})
export class DashboardPage {

  /*foods = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'}
  ];*/

  constructor(public navCtrl: NavController, public navParams: NavParams, private authService: AuthenticationService, public app: App) {
      this.authService.getinfo().subscribe(data => data);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DashboardPage');
  }

  logout = (): void => {
    const root = this.app.getRootNav();
    this.authService.logout();
    root.popToRoot();
}


}
