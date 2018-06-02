import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { CompanyPage } from './company';
import { CompanyListPage } from "./company-list";

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from "../../common/shared.module";

import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

@NgModule({
  declarations: [
    CompanyPage,
    CompanyListPage
  ],
  imports: [
    ComponentsModule,
    SharedModule,
    IonicPageModule.forChild(CompanyPage),
  ],
  entryComponents: [
      CompanyListPage
  ],
  providers: [KtcBaseService]
})
export class CompanyPageModule {}
