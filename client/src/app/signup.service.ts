import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

const BASEURL = "http://localhost:3000";

@Injectable()
export class SignupService {

  constructor(private http: Http) { }
  handleError(e) {
      return Observable.throw(e.json().message);
    }

    signup(user) {
      return this.http.post(`${BASEURL}/signup`, user)
        .map(res => res.json())
        .catch(this.handleError);
    }

    login(user) {
      return this.http.post(`${BASEURL}/login`, user,{withCredentials:false})
        .map(res => res.json())
        .catch(this.handleError);
    }

    logout() {
      return this.http.post(`${BASEURL}/logout`, {withCredentials:false})
        .map(res => res.json())
        .catch(this.handleError);
    }

    isLoggedIn() {
      return this.http.get(`${BASEURL}/loggedin`,{withCredentials:false})
        .map(res => res.json())
        .catch((err) => this.handleError(err));
    }

    getPrivateData() {
      return this.http.get(`${BASEURL}/private`,{withCredentials:false})
        .map(res => res.json())
        .catch(this.handleError);
    }
}
//he cambiado todos lod withCredential de true a false para poder hacer login
