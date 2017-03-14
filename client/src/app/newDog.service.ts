import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';

const BASEURL = "http://localhost:3000";

@Injectable()
export class NewDogService {

  constructor(private http: Http) { }

  newDog(dog) {
    return this.http.post(`${BASEURL}/api/dog`, dog)
      .map(res => res.json())
      .catch(this.handleError);
  }

}
