import { Injectable } from "@angular/core";

import { Login } from '../pages/login/login';
import { DashboardPage } from '../pages/dashboard/dashboard';
import { ProductTypeListPage } from '../pages/product-type/product-type-list';
import { CompanyListPage } from "../pages/company/company-list";
import { KtcProductsListPage } from "../pages/ktc-products/ktc-products-list";

@Injectable()
export class RegisterMenus{

        constructor(){}

        public listOfTabs = () : Array<any> => {
            return [
                {title: "Dashboard", component: DashboardPage, icon: "home"},
                {title: "Product Type", component: ProductTypeListPage, icon: "keypad"},
                {title: "Company", component: CompanyListPage, icon: "keypad"},
                {title: "Products", component: KtcProductsListPage, icon: "keypad"}
              ];
        }
}