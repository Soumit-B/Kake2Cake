import { Injectable } from "@angular/core";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { BASE_URL, API_LIST } from "../../constants/constant";
import { AuthenticationService } from "../../common/services/authentication.service";


@Injectable()

export class KtcBaseService{

    private authToken: String;
    constructor(private http: Http, private authService:AuthenticationService){
        this.authService.loadUserCredentials();
        this.authToken = this.authService.authToken;
    }

    private callRestAPI = (apiUrl: string) : any => {

        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);

        return this.http.get(apiUrl,{headers}).map((res:Response) => res.json());
    }

    public getTableList = (API_URL: string) : any => {
        return this.callRestAPI(API_URL);
    }
    
}