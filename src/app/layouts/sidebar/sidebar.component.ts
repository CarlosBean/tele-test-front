import { Component } from '@angular/core';
import { AccountService } from 'src/app/index/account.service';


@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  constructor(private accountService: AccountService) { }

  options = [
    { title: 'Users', route: 'users', icon: 'account_circle' },
    { title: 'Products', route: 'products', icon: 'account_circle' }
  ];

  logout() {
    this.accountService.logout();
  }
}