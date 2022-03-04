import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})


export class ApiserviceService {

  constructor(private _http:HttpClient) { }

  //connect frontend to backend

  apiUrl = 'https://mysql-cloud-run-7teekrs4qq-uc.a.run.app'


  //register user
  registerUser(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}/user/register`,data)
  }





}
