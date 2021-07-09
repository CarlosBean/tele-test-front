import { Injectable } from '@angular/core';
import {
    HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AccountService } from './account.service';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

    constructor(private accountService: AccountService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const token = this.accountService.token;
        console.log('WORKS?', token);
        if (this.accountService.token) {
            console.log('AHHHHH', this.accountService.token);
            const headers = new HttpHeaders({ Authorization: `Bearer ${token}` });
            req = req.clone({ headers });
        }

        return next.handle(req);
    }
}