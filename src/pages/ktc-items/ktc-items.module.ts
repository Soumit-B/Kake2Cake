import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from "../../common/shared.module";

import { KtcItemsPage } from './ktc-items';
import { KtcItemsListPage } from './ktc-items-list';

import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";


@NgModule({
  declarations: [
    KtcItemsPage,
    KtcItemsListPage
  ],
  imports: [
    ComponentsModule,
    SharedModule,
    IonicPageModule.forChild(KtcItemsPage),
  ],
  entryComponents: [
    KtcItemsListPage
  ],
  providers: [KtcBaseService]
})
export class KtcItemsPageModule {}
