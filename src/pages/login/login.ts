import { Component  } from "@angular/core";
import { FormControl, FormGroup } from '@angular/forms';
import { NavController } from 'ionic-angular';

import { HomePage } from "../home/home";

@Component({
    selector: 'page-login',
    templateUrl: 'login.html'
})

export class Login {
    private loginForm: FormGroup
    private userName: FormControl;
    private password: FormControl;

    constructor(private navCtrl: NavController){
        this.loginForm = new FormGroup({
            userName: new FormControl(),
            password: new FormControl()
        });
    }

    onSubmit(loginForm: FormGroup): void{
        this.navCtrl.push(HomePage);
    }
}