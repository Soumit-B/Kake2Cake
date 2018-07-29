import { Injectable } from "@angular/core";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { BASE_URL, FIELD_API_LIST } from "../../constants/constant";
import { AuthenticationService } from "../../common/services/authentication.service";


@Injectable()

export class KtcItemsService{
    private _BASE : string = BASE_URL.DOMAIN+":"+BASE_URL.PORT;
    private authToken: String;
    constructor(private http: Http, private authService:AuthenticationService){
        this.authService.loadUserCredentials();
        this.authToken = this.authService.authToken;
    }

    public getProductTypeList = () : any => {
        let API_URL = this._BASE+FIELD_API_LIST.GET_PRODUCT_TYPE_LIST;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);

        return this.http.get(API_URL,{headers}).map((res:Response) => res.json());
    }

    public getProductNamesList = (itemID: number) : any => {
        let API_URL = this._BASE+FIELD_API_LIST.GET_PRODUCT_NAME_LIST;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);

        API_URL = API_URL.replace('<itemID>',itemID.toString());

        return this.http.get(API_URL,{headers}).map((res:Response) => res.json());
    }

    public getCompanyList = () : any => {
        let API_URL = this._BASE+FIELD_API_LIST.GET_COMPANY_LIST;
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);

        return this.http.get(API_URL,{headers}).map((res:Response) => res.json());
    }
    
}