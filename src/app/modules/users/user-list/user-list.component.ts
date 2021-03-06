
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-list',
  template: `
    <div class="main-container">
      <h4 class="module-title">User List (Admin)</h4>
      <app-table
        [moduleName]="'user'"
        [elementData]="elementData"
        [displayedColumns]="columns">
      </app-table>
    </div>
  `,
  styles: [`
    :host { position: relative }
  `],
})
export class UserListComponent {
  elementData = [];
  columns = ['name', 'email', 'role', 'status', 'google'];
  constructor(private userService: UserService) { }

  ngOnInit() {
    this.userService.getAll().subscribe(({ data }) => this.elementData = data);
  }
}
