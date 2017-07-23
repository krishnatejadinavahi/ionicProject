import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { LoginPage } from './login.component';
import { HttpModule } from '@angular/http';
import {PortalModule} from "../portal/portal.module";
import { RegisterPage } from './register.component';

@NgModule({
  declarations: [
    LoginPage,
    RegisterPage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(LoginPage),
    PortalModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    LoginPage,
    RegisterPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class LoginModule { }
