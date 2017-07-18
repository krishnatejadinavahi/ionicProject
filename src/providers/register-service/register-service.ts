import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

/*
  Generated class for the RegisterServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class RegisterServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RegisterServiceProvider Provider');
  }

  signUpUser(formObj) {
    return firebase.auth().createUserWithEmailAndPassword(formObj.userName, formObj.password);
  }

}
