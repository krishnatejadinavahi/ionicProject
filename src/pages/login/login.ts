import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import {RegisterPage} from "../register/register";
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';
import { RegisterServiceProvider } from "../../providers/register-service/register-service";
import { ToastController } from 'ionic-angular';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

private loginForm : FormGroup;
private registerPage = RegisterPage;

  constructor(public navCtrl: NavController, 
    public navParams: NavParams, private formBuilder: FormBuilder, 
    private http : Http, private registerService: RegisterServiceProvider, private toastCtrl: ToastController) {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
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

  login() {
    this.registerService.login(this.loginForm.value).then((response) => {
      console.log(response);
    }, 
    (err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      }).present();
    });
  }

}
