import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyPortal } from './portal.component';
import { UserPortalPage } from '../../pages/user-portal/user-portal';
import { HttpModule } from '@angular/http';
import {AppModule} from "../../app/app.module";

@NgModule({
  declarations: [
    MyPortal,
    UserPortalPage
  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyPortal)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyPortal,
    UserPortalPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class PortalModule { }
