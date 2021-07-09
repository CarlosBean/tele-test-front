import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient, private router: Router) { }

  login(user: { email: string; password: string }): Observable<any> {
    return this.http.post(environment.API_URL + '/login', user);
  }

  logout() {
    this.router.navigateByUrl('login');
  }
}
