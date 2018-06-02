import { NgModule } from '@angular/core';
import { SharedModule } from "../common/shared.module";
import {CommonModule} from '@angular/common';

import { KtcTableComponent } from './ktc-table/ktc-table';
import { KtcBaseComponent } from './ktc-base/ktc-base';
import { KtcAddFormComponent } from './ktc-add-form/ktc-add-form';

@NgModule({
	declarations: [
		KtcTableComponent,
    	KtcBaseComponent,
    	KtcAddFormComponent
	],
	imports: [
		SharedModule,
		CommonModule
	],
	exports: [
		KtcTableComponent,
		KtcBaseComponent,
    	KtcAddFormComponent
	]
})
export class ComponentsModule {}
