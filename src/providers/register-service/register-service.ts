import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import * as firebase from 'firebase';

@Injectable()
export class RegisterServiceProvider {

  constructor(public http: Http) {
    console.log('Hello RegisterServiceProvider Provider');
  }

  signUpUser(formObj) {
    return firebase.auth().createUserWithEmailAndPassword(formObj.userName, formObj.password);
  }

  login(formObj) {
    return firebase.auth().signInWithEmailAndPassword(formObj.userName, formObj.password);
  }

}
