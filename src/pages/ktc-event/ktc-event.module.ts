import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';

import { ComponentsModule } from '../../components/components.module';
import { SharedModule } from "../../common/shared.module";

import { KtcEventPage } from './ktc-event';
import { KtcEventListPage } from './ktc-event-list';

import { KtcBaseService } from "../../components/ktc-base/ktc-base.services";

@NgModule({
  declarations: [
    KtcEventPage,
    KtcEventListPage
  ],
  imports: [
    ComponentsModule,
    SharedModule,
    IonicPageModule.forChild(KtcEventPage),
  ],
  entryComponents: [
    KtcEventListPage
  ],
  providers: [KtcBaseService]
})
export class KtcEventPageModule {}
