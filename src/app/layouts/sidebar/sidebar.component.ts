import { Component } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent {

  options = [
    { title: 'Users', route: 'users', icon: 'account_circle' },
    { title: 'Products', route: 'products', icon: 'account_circle' }
  ];
}