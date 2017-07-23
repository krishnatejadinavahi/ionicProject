import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoginPage } from './login.component';
import { HttpModule } from '@angular/http';
import {PortalModule} from "../portal/portal.module";

@NgModule({
  declarations: [
    LoginPage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(LoginPage),
    PortalModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class LoginModule { }
