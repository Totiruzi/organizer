import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { IAuthData } from "./auth-data.model";
import { IUser } from "./user.model";

import { Subject } from "rxjs";

@Injectable({ providedIn: 'root' })
export class AuthService {
  authChange = new Subject<boolean>();
  private user: IUser | undefined;

  constructor(private router: Router) {}

  registerUser(authData: IAuthData) {
    this.user = {
      uid: Math.round(Math.random() * 10000).toString(),
      email: authData.email
    };
    this.succesfulAuth();
  }

  login(authData: IAuthData) {
    this.user = {
      uid: Math.round(Math.random() * 10000).toString(),
      email: authData.email
    }
    this.succesfulAuth();
  };

  logout() {
    this.user = null as any;
    this.authChange.next(false); 
    this.router.navigate(['/login']);
  }

  getUser() {
    return { ...this.user };
  }

  isAuthenticated() {
    return !!this.user;
  }

  private succesfulAuth() {
    this.authChange.next(true); 
    this.router.navigate(['/books']);
  } 
}