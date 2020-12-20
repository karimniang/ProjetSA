import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap, map } from 'rxjs/operators';
import jwt_decode from 'jwt-decode';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';

const jwt = new JwtHelperService();

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  private decodedToken;
  public localStorage = window.localStorage;

  constructor(private http: HttpClient, private router: Router) {

  }
  authUser(username, password) {
    return this.http.post("http://127.0.0.1:8000/api/login_check", { username, password })
  }

  saveToken(username, password) {
    this.authUser(username, password).subscribe(
      token => {
        localStorage.clear();
        localStorage.setItem('token', token['token']);
        //console.log(localStorage.getItem('token'));
        return this.decodedToken
      },
      httpError => console.log(httpError.error.message)
    );
    //this.decodedToken = jwt_decode(token);
    //localStorage.setItem('auth_tkn', token);
    //localStorage.setItem('auth_meta', JSON.stringify(this.decodedToken));
    //console.log(localStorage.getItem('auth_meta'))
    //return localStorage.getItem('auth_meta');
  }
  decodeToken() {
    return this.localStorage.getItem('token') ? jwt_decode(this.localStorage.getItem('token')) : null;
  }
  getToken(): string {
    return this.localStorage.getItem('token');
  }
  redirectByRole(role: string) {
    switch (role) {
      case 'ROLE_ADMIN': {
        this.router.navigate(['accueil-admin']);
        break;
      }
      case 'ROLE_FORMATEUR': {
        this.router.navigate(['accueil-formateur']);
        break;
      }
      default: {
        this.router.navigate(['login']);
        break;
      }
    }
  }

  logout() {
    localStorage.clear();
  }
}
