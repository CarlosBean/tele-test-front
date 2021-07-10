import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AccountService } from 'src/app/index/account.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  mobile = false;

  options = [
    { title: 'Users', route: 'users', icon: 'account_circle', role: 'ADMIN_ROLE' },
    { title: 'Products', route: 'products', icon: 'account_circle', role: 'USER_ROLE' }
  ];

  constructor(private accountService: AccountService, private route: ActivatedRoute) {
    this.mobile = window.innerWidth <= 769;
  }

  ngOnInit() {
    this.route.data.subscribe((data: any) => {
      console.log('title', data);
    });

    window.onresize = () => this.mobile = window.innerWidth <= 769;
  }

  logout() {
    this.accountService.logout();
  }
}