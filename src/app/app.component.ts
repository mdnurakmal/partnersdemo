import { Component, Inject, OnInit } from '@angular/core';
import { Demo } from './models';
import { DOCUMENT } from '@angular/common';
import { AuthService } from '@auth0/auth0-angular';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent  implements OnInit {
  isAuthenticated: boolean;
  constructor(private authService: AuthService) {
this.isAuthenticated = false;
console.log("Auth false");

}

  loginWithRedirect() {
    // Call this to redirect the user to the login page
    this.authService.loginWithRedirect({
      appState: { target: '/' }
    })
  }

  ngOnInit(): void {
    this.authService.isAuthenticated$.subscribe((success: boolean) => {
      this.isAuthenticated = success;
      console.log("Auth sucess");
    });
  }



  db : Demo[];
  addItem(newItem: Demo[]) {
    this.db= newItem;
  }

}

