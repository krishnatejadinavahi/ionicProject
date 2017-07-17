import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {RegisterPage} from "../register/register";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

private loginForm : FormGroup;
private registerPage = RegisterPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private http : Http) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(10)]],
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  validateUserName() {
    return !this.loginForm.controls.userName.pristine && !this.loginForm.controls.userName.valid;
  }

  validatePassword() {
    return !this.loginForm.controls.password.pristine && !this.loginForm.controls.password.valid;
  }

  /* sendRequest() {
    this.http.get("http://localhost").map(res => res.json()).subscribe(function test(res) {
      console.log(res);
    });
  } */

}
