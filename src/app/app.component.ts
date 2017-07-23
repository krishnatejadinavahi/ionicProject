import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../modules/login/login.component';
import * as firebase from 'firebase';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any = LoginPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {

    firebase.initializeApp({
      apiKey: 'AIzaSyBdc66UuUWYSkpvhPWCzNORyiyiEdmvAiI',
      authDomain: 'ionicproject-6c7c4.firebaseapp.com',
      databaseURL: 'https://ionicproject-6c7c4.firebaseio.com/',
      projectId: 'ionicproject-6c7c4',
      storageBucket: 'gs://ionicproject-6c7c4.appspot.com/',
      messagingSenderId: '149063071876'
    });

    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

