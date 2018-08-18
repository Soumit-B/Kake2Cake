import { Injectable } from "@angular/core";

import { Login } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProductTypeListPage } from '../pages/product-type/product-type-list';
import { CompanyListPage } from "../pages/company/company-list";
import { KtcProductsListPage } from "../pages/ktc-products/ktc-products-list";
import { KtcEventListPage } from "../pages/ktc-event/ktc-event-list";
import { KtcItemsListPage } from "../pages/ktc-items/ktc-items-list";
import { KtcComboListPage } from "../pages/ktc-combo/ktc-combo-list";

@Injectable()
export class RegisterMenus{

        constructor(){}

        public listOfTabs = () : Array<any> => {
            return [
                {title: "Dashboard", component: DashboardPage, icon: "home"},
                /*{title: "Product Type", component: ProductTypeListPage, icon: "keypad"},
                {title: "Company", component: CompanyListPage, icon: "keypad"},
                {title: "Products", component: KtcProductsListPage, icon: "keypad"},
                {title: "Event", component: KtcEventListPage, icon: "keypad"},
                {title: "Items", component: KtcItemsListPage, icon: "keypad"},*/
                {title: "Combo", component: KtcComboListPage, icon: "keypad"}   
              ];
        }
}