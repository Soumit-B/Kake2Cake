import { Injectable } from "@angular/core";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { BASE_URL, API_LIST } from "../../constants/constant";
import { AuthenticationService } from "../../common/services/authentication.service";


@Injectable()

export class CompanyService{

    private authToken: String;
    constructor(private http: Http, private authService:AuthenticationService){
        this.authService.loadUserCredentials();
        this.authToken = this.authService.authToken;
    }

    private callRestAPI = (apiName: String) : any => {
        let apiUrl = BASE_URL.DOMAIN+":"+BASE_URL.PORT+apiName;

        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);

        return this.http.get(apiUrl,{headers}).map((res:Response) => res.json());
    }

    public getProudctTypeList = () : any => {
        return this.callRestAPI(API_LIST.GET_PRODUCT_TYPE_LIST);
    }
    
}