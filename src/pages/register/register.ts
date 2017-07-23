import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { RegisterServiceProvider } from "../../providers/register-service/register-service";
import * as firebase from 'firebase';
import { AlertController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { UserPortalPage } from '../user-portal/user-portal';
import { LoginPage } from '../login/login';
import { App, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage {
  private registrationForm: FormGroup;
  private userPortalPage: UserPortalPage;
  private loginPage: LoginPage;

  constructor(public navCtrl: NavController,
    public navParams: NavParams,
    private formBuilder: FormBuilder,
    private registerService: RegisterServiceProvider,
    private toastCtrl: ToastController,
    private alertCtrl: AlertController, public viewCtrl: ViewController, public appCtrl: App) {

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

  registerUser() {
    this.registerService.signUpUser(this.registrationForm.value).then((response) => {
      this.alertCtrl.create({
        title: 'Registration successful',
        subTitle: "User " + this.registrationForm.value.userName + " successfully created. Please log in to continue!!!",
        buttons: [
          {
            text: 'OK',
            handler: () => {
              this.viewCtrl.dismiss();
              this.appCtrl.getRootNav().push(LoginPage);
            }
          }
        ]
      }).present();
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
