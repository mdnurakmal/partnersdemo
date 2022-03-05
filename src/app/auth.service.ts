import { Injectable } from '@angular/core';
import { tap } from 'rxjs/operators';
import { ApiserviceService } from './apiservice.service';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  // private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  // isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private service: ApiserviceService, private router: Router) {
    // const token = localStorage.getItem('auth_token')
    // this._isLoggedIn$.next(!!token)
   }

  login(email: string, password: string){
    return this.service.loginUser(email, password).pipe(
      tap((response: any) =>{
        // this._isLoggedIn$.next(true)
        localStorage.setItem('auth_token', response.token)
      })
    )
  }

  loggedIn(){
    return !!localStorage.getItem('auth_token')
  }

  getToken() {
    return localStorage.getItem('auth_token')
  }

  logoutUser(){
    localStorage.removeItem('auth_token')
    this.router.navigate(['/user/login'])
  }

}
