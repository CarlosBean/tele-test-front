import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminGuard } from './guards/admin.guard';
import { AuthGuard } from './guards/auth.guard';
import { UserGuard } from './guards/user.guard';
import { LoginComponent } from './index/login/login.component';
import { HomeComponent } from './layouts/home/home.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'login', component: LoginComponent },
  {
    path: 'dashboard',
    component: HomeComponent,
    canActivate: [AuthGuard],
    children: [
      {
        path: 'users',
        canActivate: [AdminGuard],
        loadChildren: () =>
          import('./modules/users/users.module').then(m => m.UsersModule)
      },
      {
        path: 'products',
        canActivate: [UserGuard],
        loadChildren: () =>
          import('./modules/products/products.module').then(m => m.ProductsModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
