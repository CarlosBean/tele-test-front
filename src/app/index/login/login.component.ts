import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { AccountService } from '../account.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private fb: FormBuilder,
    private accountService: AccountService,
    private router: Router,
  ) { }

  hide = true;
  isLoading = false;
  loginForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required]]
  });

  ngOnInit(): void {
  }

  login() {
    if (this.loginForm.invalid) {
      alert('Oops, an error has ocurred, There is an error with the credentials');
      return;
    }

    this.isLoading = true;
    this.accountService.login(this.loginForm.value).subscribe(
      (res: any) => {
        this.isLoading = false;
        if (res.success) {
          console.log('login successful');
          if (res.user.role === 'USER_ROLE') {
            this.router.navigateByUrl('/dashboard/products');
          } else if (res.user.role === 'ADMIN_ROLE') {
            this.router.navigateByUrl('/dashboard/users');
          }
        }
      },
      (err: any) => {
        this.isLoading = false;
        alert('The credentials are invalid, please try again with correct information');
      }
    );
  }

}
