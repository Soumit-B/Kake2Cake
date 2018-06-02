import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from "../../common/shared.module";

import { KtcProductsPage } from './ktc-products';
import { KtcProductsListPage} from './ktc-products-list';

import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

@NgModule({
  declarations: [
    KtcProductsPage,
    KtcProductsListPage
  ],
  imports: [
    ComponentsModule,
    SharedModule,
    IonicPageModule.forChild(KtcProductsPage),
  ],
  entryComponents: [
    KtcProductsListPage
  ],
  providers: [KtcBaseService]
})
export class KtcProductsPageModule {}
