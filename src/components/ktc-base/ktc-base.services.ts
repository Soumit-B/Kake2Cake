import { Injectable } from "@angular/core";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { BASE_URL, ADMIN_API_LIST } from "../../constants/constant";
import { AuthenticationService } from "../../common/services/authentication.service";


@Injectable()

export class KtcBaseService{

    private authToken: String;
    constructor(private http: Http, private authService:AuthenticationService){
        this.authService.loadUserCredentials();
        this.authToken = this.authService.authToken;
    }

    public getTableList = (API_URL: string) : any => {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);

        return this.http.get(API_URL,{headers}).map((res:Response) => res.json());
    }

    public getItemDetails = (API_URL: string, itemID: number): any => {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);
        API_URL = API_URL.replace('<itemID>',itemID.toString());

        return this.http.get(API_URL,{headers}).map((res:Response) => res.json());
    }

    public InsertOrUpdateData = (API_URL: string, postData: any) : any => {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);

        return this.http.post(API_URL,postData,{headers}).map((res:Response) => res.json());
    }

    public deleteData = (API_URL: string, ID: number) : any => {
        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);

        return this.http.post(API_URL+'?ID='+ID,{headers}).map((res:Response) => res.json());
    }
    
}