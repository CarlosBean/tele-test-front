import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { IUser } from '../shared/models/user';
import { map, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  token: string;
  user: IUser;
  API_URL = environment.API_URL;

  constructor(private http: HttpClient, private router: Router) {
    this.loadStorage();
  }

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(environment.API_URL + '/login', user).pipe(
      map((res: any) => {
        this.saveStorage(res.data.token);
        return res;
      })
    );
  }

  renewToken() {
    const url = environment.API_URL + '/login/newtoken' + '?token=' + this.token;
    return this.http.get(url).pipe(
      map((res: any) => {
        this.saveStorage(res.token);
      }),
      catchError((err: any) => {
        this.logout();
        // Swal.fire('Error on Session', 'Token cannot be renewed', 'error');
        return new Observable<any>();
      })
    );
  }

  isLogged() {
    return this.token && this.token.length > 5;
  }

  loadStorage() {
    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.user = this.parseJwt(this.token).user;
    }
  }

  saveStorage(token: string) {
    localStorage.setItem('token', token);
    this.token = token;
  }

  logout() {
    this.token = '';
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  parseJwt(token: string) {
    var base64Url = token.split('.')[1];
    var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
    var jsonPayload = decodeURIComponent(atob(base64).split('').map(function (c) {
      return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
    }).join(''));

    return JSON.parse(jsonPayload);
  };
}
