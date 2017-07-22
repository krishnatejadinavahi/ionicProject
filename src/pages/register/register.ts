import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterServiceProvider } from "../../providers/register-service/register-service";
import * as firebase from 'firebase';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the RegisterPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private registrationForm: FormGroup;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private registerService: RegisterServiceProvider,
    private toastCtrl: ToastController) {
    this.registrationForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(25)]],
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6), Validators.maxLength(10)]]
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  validateUserName() {
    return !this.registrationForm.controls.userName.pristine && !this.registrationForm.controls.userName.valid;
  }

  validatePassword() {
    return !this.registrationForm.controls.password.pristine && !this.registrationForm.controls.password.valid;
  }

  validateName() {
    return !this.registrationForm.controls.name.pristine && !this.registrationForm.controls.name.valid;
  }

   /* registerUser() {
    this.registerService.signUpUser(this.registrationForm.value).then(function register(user) {
      console.log(user);
    }, (function error(err) {
      console.log(this.toastCtrl);
      this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      }).present();
    }).bind(this));
  }  */

   registerUser() {
    this.registerService.signUpUser(this.registrationForm.value).then(function register(user) {
      console.log(user);
    }, (err) => {
      this.toastCtrl.create({
        message: err.message,
        duration: 3000,
        position: 'bottom',
        showCloseButton: true
      }).present();
    });
  } 
  

}
