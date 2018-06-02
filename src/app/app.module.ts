import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { ComponentsModule } from '../components/components.module';
import { SharedModule } from "../common/shared.module";
import { ProductTypePageModule } from "../pages/product-type/product-type.module";
import { CompanyPageModule } from "../pages/company/company.module";
import { KtcProductsPageModule } from "../pages/ktc-products/ktc-products.module";

import { MyApp } from './app.component';
import { Login } from '../pages/login/login';
import { HomePage } from '../pages/home/home';
import { DashboardPage } from '../pages/dashboard/dashboard';

import { RegisterMenus } from "../app/registerMenus";

@NgModule({
  declarations: [
    MyApp,
    Login,
    HomePage,
    DashboardPage
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    SharedModule,
    ComponentsModule,
    ProductTypePageModule,
    CompanyPageModule,
    KtcProductsPageModule,
    IonicModule.forRoot(MyApp,{
      menuType: 'push'
    })
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Login,
    HomePage,
    DashboardPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    RegisterMenus,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
