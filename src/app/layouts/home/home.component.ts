import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <div class="grid-container">
      <app-sidebar class="sidenav"></app-sidebar>
      <main class="main">
        <router-outlet></router-outlet>
      </main>
    </div>
  `,
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
