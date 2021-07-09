import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './index/login/login.component';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
  {
    path: '', component: LoginComponent,
  },
  {
    path: 'dashboard',
    component: HomeComponent,
    children: [
      {
        path: 'users',
        loadChildren: () =>
          import('./modules/users/users.module').then(m => m.UsersModule)
      },
      /* {
        path: 'products',
        loadChildren: () =>
          import('./modules/products/products.module').then(m => m.PostsModule)
      }, */
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
