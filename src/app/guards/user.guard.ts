
import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AccountService } from '../index/account.service';
@Injectable({
    providedIn: 'root'
})
export class UserGuard implements CanActivate {

    constructor(public accountService: AccountService) { }

    canActivate() {
        if (this.accountService.user.role === 'USER_ROLE') {
            return true;
        } else {
            this.accountService.logout();
            return false;
        }
    }
}