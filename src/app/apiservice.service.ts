import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { JwtHelperService } from "@auth0/angular-jwt";
import { map, tap } from 'rxjs/operators';
import * as moment from 'moment';


// const jwt = new JwtHelperService()

@Injectable({
  providedIn: 'root'
})


export class ApiserviceService {

  // private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  // isLoggedIn$ = this._isLoggedIn$.asObservable()

  // private decodedToken

  constructor(private _http:HttpClient) {
    // const token = localStorage.getItem('auth_token')
    // this._isLoggedIn$.next(!!token)
  }

  //connect frontend to backend

  apiUrl = 'https://mysql-cloud-run-uc4rkdapoq-uc.a.run.app'


  //register user
  registerUser(data:any):Observable<any>
  {
    return this._http.post(`${this.apiUrl}/user/register`,data)
  }

  loginUser(email: string, password: string)
  {
    return this._http.post(`${this.apiUrl}/user/login`, {email, password})
    // .pipe(
    //   tap(response => {
    //     this._isLoggedIn$.next(true)
    //     localStorage.setItem('auth_token', response.token)
    //   })
    // )
  }


  // saveToken(token: any):any{
  //   this.decodedToken = jwt.decodeToken(token);
  //   localStorage.setItem('auth_tkn', token)
  //   localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken))
  //   return token
  // }


}
