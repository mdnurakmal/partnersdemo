import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { tap } from 'rxjs/operators';
import { ApiserviceService } from './apiservice.service';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private _isLoggedIn$ = new BehaviorSubject<boolean>(false)
  isLoggedIn$ = this._isLoggedIn$.asObservable()

  constructor(private service: ApiserviceService) {
    const token = localStorage.getItem('auth_token')
    this._isLoggedIn$.next(!!token)
   }

  login(email: string, password: string){
    return this.service.loginUser(email, password).pipe(
      tap((response: any) =>{
        this._isLoggedIn$.next(true)
        localStorage.setItem('auth_token', response.token)
      })
    )
  }


}
