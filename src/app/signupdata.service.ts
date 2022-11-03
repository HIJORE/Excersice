import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { FormGroup } from '@angular/forms';
@Injectable({
  providedIn: 'root'
})
export class SignupdataService {
  
  constructor(private http: HttpClient) { }

  public api: string = "http://localhost:9090";

  public postData(user: FormGroup) {
    return this.http.post(this.api + "/postdata", user);
  }

}
