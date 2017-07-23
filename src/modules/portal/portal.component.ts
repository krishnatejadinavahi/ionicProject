import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { UserPortalPage } from "../../pages/user-portal/user-portal";

@Component({
    templateUrl: '../../pages/user-portal/user-portal.html'
})
export class MyPortal {

    userPortalPage: any = UserPortalPage;
    constructor(platform: Platform) {

    }
}

