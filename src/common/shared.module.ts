import { NgModule } from '@angular/core';
import {CommonModule} from '@angular/common';
import {MatTableModule} from '@angular/material/table';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatPaginatorModule} from '@angular/material/paginator';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatSortModule} from '@angular/material/sort';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AuthenticationService } from "../common/services/authentication.service";

@NgModule({
	declarations: [],
	imports: [
		CommonModule,
		MatTableModule,
		MatFormFieldModule,
		MatPaginatorModule,
		MatInputModule,
		MatButtonModule,
		MatIconModule,
        MatSortModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
		MatSelectModule,
		FormsModule,
		ReactiveFormsModule
	],
	exports: [
		MatTableModule,
		MatFormFieldModule,
		MatPaginatorModule,
		MatInputModule,
		MatButtonModule,
		MatSortModule,
        MatIconModule,
        MatCardModule,
        MatCheckboxModule,
        MatRadioModule,
        MatSelectModule,
		FormsModule,
		ReactiveFormsModule
    ],
    providers: [
        AuthenticationService
    ]
})
export class SharedModule {}