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

    this.accountService.login(this.loginForm.value).subscribe(
      (res: any) => {
        if (res.success) {
          console.log('login successful');
          this.router.navigateByUrl('/dashboard');
        }
      },
      (err: any) => {
        alert('The credentials are invalid, please try again with correct information');
      }
    );
  }

}
