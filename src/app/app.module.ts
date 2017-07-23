import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';
import {PortalModule} from "../modules/portal/portal.module";

import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterServiceProvider } from '../providers/register-service/register-service';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e2a95791'
  }
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    PortalModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule,
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RegisterServiceProvider
  ]
})
export class AppModule { }
