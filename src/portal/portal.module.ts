import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyPortal } from './portal.component';

import { UserPortalPage } from '../pages/user-portal/user-portal';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';
import { HttpModule } from '@angular/http';

import { AngularFireAuth } from 'angularfire2/auth';
//import * as firebase from 'firebase';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { RegisterServiceProvider } from '../providers/register-service/register-service';
import {AppModule} from "../app/app.module";

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': 'e2a95791'
  }
};

@NgModule({
  declarations: [
    MyPortal,
    UserPortalPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyPortal),
    CloudModule.forRoot(cloudSettings),
    AngularFireModule,
    AngularFireDatabaseModule, // imports firebase/database, only needed for database features
    AngularFireAuthModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyPortal,
    UserPortalPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    RegisterServiceProvider
  ]
})
export class PortalModule { }
