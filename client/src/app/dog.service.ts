import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { environment } from '../environments/environment';

@Injectable()
export class DogService {
  BASE_URL: string = environment.apiUrl;
  constructor(private http: Http) {}

  getList() {
    return this.http.get(`${this.BASE_URL}/api/dog`)
      .map((res) => res.json());
  }

  get(id) {
    return this.http.get(`${this.BASE_URL}/api/dog/${id}`)
      .map((res) => res.json());
  }

  add(dog) {
    return this.http.post(`${this.BASE_URL}/api/dog`,dog)
      .map((res)=> res.json());
  }

  edit(dog) {
    return this.http.put(`${this.BASE_URL}/api/dog/${dog.id}`, dog)
      .map((res) => res.json());
  }

  remove(id) {
    return this.http.delete(`${this.BASE_URL}/api/dog/${id}`)
      .map((res) => res.json());
  }

}
