import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from "../../common/shared.module";

import { KtcComboPage } from './ktc-combo';
import { KtcComboListPage } from './ktc-combo-list';

import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

@NgModule({
  declarations: [
    KtcComboPage,
    KtcComboListPage
  ],
  imports: [
    ComponentsModule,
    SharedModule,
    IonicPageModule.forChild(KtcComboPage),
  ],
  entryComponents: [
    KtcComboListPage
  ],
  providers: [KtcBaseService]
})
export class KtcComboPageModule {}
