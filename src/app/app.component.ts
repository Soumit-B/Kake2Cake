import { Component, ViewChild } from '@angular/core';
import { Platform, MenuController, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// import { HomePage } from '../pages/home/home';
import { Login } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProductTypeListPage } from '../pages/product-type/product-type-list';
import { CompanyListPage } from "../pages/company/company-list";
import { KtcProductsListPage } from "../pages/ktc-products/ktc-products-list";

import { RegisterMenus } from "../app/registerMenus";

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;

  rootPage:any;
  pages: Array<{title: string, component: any, icon: string}>;
  activePage: any;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, public menuCtrl: MenuController, public registerMenus: RegisterMenus) {

    this.pages = this.registerMenus.listOfTabs();
    this.activePage = this.pages[3];
    this.rootPage = this.activePage['component'];

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    
  }

  openPage = (page: any): void => {
      this.nav.setRoot(page.component);
      this.activePage = page;
  }

  checkActive = (page: any) : boolean =>{
    return page == this.activePage;
  }

}

