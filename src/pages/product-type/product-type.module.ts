import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from "../../common/shared.module";

import { ProductTypePage } from './product-type';
import { ProductTypeListPage } from './product-type-list';

import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

@NgModule({
  declarations: [
    ProductTypePage,
    ProductTypeListPage
  ],
  imports: [
    ComponentsModule,
    SharedModule,
    IonicPageModule.forChild(ProductTypePage)
  ],
  entryComponents: [
    ProductTypeListPage
  ],
  providers: [KtcBaseService]
})
export class ProductTypePageModule {}
