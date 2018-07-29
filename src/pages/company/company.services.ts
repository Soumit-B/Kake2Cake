import { Injectable } from "@angular/core";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { BASE_URL, ADMIN_API_LIST } from "../../constants/constant";
import { AuthenticationService } from "../../common/services/authentication.service";


@Injectable()

export class KTCCompanyService{

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

    public getCountryList = () : any => {
        return this.callRestAPI("/api/GetCountries");  
    }

    public getStateList = (countryID) : any => {
        return this.callRestAPI("/api/GetStates?countryID="+countryID);
    }

    public getCityList = (stateID: number) : any => {
        return this.callRestAPI("/api/GetCities?StateID="+stateID);  
    }
    
}