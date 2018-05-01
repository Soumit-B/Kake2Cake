import { Injectable } from "@angular/core";
import { Http, Response, Headers, URLSearchParams, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

import { ILogin } from "../models/login.model";

import { BASE_URL, API_LIST } from "../../constants/constant";

@Injectable()

export class AuthenticationService{

    public isLoggedIn: Boolean;
    public authToken: String;

    constructor(private http: Http){
        this.isLoggedIn = false;
        this.authToken = null;
    }

    private storeUserCredentials = (authToken: String): void => {
        window.localStorage.setItem('authToken',authToken.toString());
        this.useCredentials(authToken);
    }

    private useCredentials = (authToken: String): void =>{
        this.isLoggedIn = true;
        this.authToken = authToken;
    }

    private loadUserCredentials = (): void => {
        let authToken = window.localStorage.getItem('authToken');
        this.useCredentials(authToken);
    }

    private destroyUserCredentials = (): void => {
        this.isLoggedIn = false;
        this.authToken = null;
        window.localStorage.clear();
    }

    public authenticate = (user: ILogin): any => {
        // console.log(user);
        /*
            'https://maps.googleapis.com/maps/api/geocode/json?address=1600+Amphitheatre+Parkway,+Mountain+View,+CA'
        */
        let apiUrl = BASE_URL.DOMAIN+":"+BASE_URL.PORT+API_LIST.TOKEN;
        
        let apiHeaders = new Headers();
        apiHeaders.append('Content-Type', 'application/json');  
          
	    let apiParams = new URLSearchParams();
        apiParams.set('grant_type', 'password');
        apiParams.set('username', user.userName.toString());
        apiParams.set('password', user.password.toString());

        let options = new RequestOptions({ headers: apiHeaders, params: apiParams });

        return this.http.get(apiUrl, options).map((res:Response) => {
            if(res.json().access_token){
                this.storeUserCredentials(res.json().access_token);
                return true;
            }
            return false;            
        });
    };

    public getinfo = (): any => {
        this.loadUserCredentials();
        
        let apiUrl = BASE_URL.DOMAIN+":"+BASE_URL.PORT+API_LIST.LOGIN;

        let headers = new Headers();
        headers.append('Authorization', 'Bearer ' +this.authToken);

        return this.http.get(apiUrl,{headers}).map((res:Response) => {
            console.log(res.json());
            return res.json()
        });
    }

    public logout = (): void => {
        this.destroyUserCredentials();
    }
    
}