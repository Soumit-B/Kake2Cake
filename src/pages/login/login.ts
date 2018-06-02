import { Component  } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { NavController, MenuController } from 'ionic-angular';

import { HomePage } from "../home/home";
import { DashboardPage } from "../dashboard/dashboard";

import { ILogin } from "../../common/models/login.model";

import { AuthenticationService } from "../../common/services/authentication.service";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html',
    providers: [AuthenticationService]
})

export class Login {
    private loginForm: FormGroup;
    private userName: FormControl;
    private password: FormControl;

    constructor(private navCtrl: NavController, private authService: AuthenticationService, public menuCtrl: MenuController){
        this.loginForm = new FormGroup({
            userName: new FormControl(),
            password: new FormControl()
        });
    }

    ionViewDidEnter() {
        this.menuCtrl.enable(false);
    }

    ionViewWillLeave() {
        this.menuCtrl.enable(true);
    }

    public onSubmit = (loginForm: FormGroup): void => {
        let userObj: ILogin = {
            userName : loginForm.value.userName,
            password : loginForm.value.password
        }
        this.authService.authenticate(userObj).subscribe(data => data ? this.navCtrl.setRoot(DashboardPage) : console.log('Authentication failed') );
    }
}