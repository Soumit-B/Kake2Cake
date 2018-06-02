import { Component, ViewChild, Input, Output, EventEmitter } from '@angular/core';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';

import { IProductList } from "../../pages/product-type/product-list.model";

/**
 * Generated class for the KtcTableComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'ktc-table',
  templateUrl: 'ktc-table.html'
})
export class KtcTableComponent {

  text: string;
  public displayedColumns: Array<String>;
  dataSource: MatTableDataSource<IProductList>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  @Input('ktcTableList') ktcTableList: Array<any>;
  @Output() crudEvent = new EventEmitter();

  constructor() {}

  ngOnChanges(){
    // console.log("ktcTableList : ", this.ktcTableList);
    this.displayedColumns = this.ktcTableList[0] ? Object.keys(this.ktcTableList[0]) : [];
    this.displayedColumns.push("Action");
    this.dataSource = new MatTableDataSource(this.ktcTableList);
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    filterValue = filterValue.trim();
    filterValue = filterValue.toLowerCase();
    this.dataSource.filter = filterValue;
  }

  crudEventHandler = (type: String, row: any = {}): void => {
      // console.log("add clicked");
      this.crudEvent.emit({eventType: type, row});
  }

  capitalizeFirstLetter = (val: String): String => {
      return val.charAt(0).toUpperCase() + val.slice(1).toLocaleLowerCase();
  }

}
