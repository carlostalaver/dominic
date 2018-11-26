import { UserInterface } from './../../../models/user-interface';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router, private location: Location) { }
  user: UserInterface = {
    email: '',
    password: ''
  };

  public error = false;
  ngOnInit() {
  }

  onLogin(form: NgForm) {
    console.log('el formulario ', form);
    if (form.valid) {
      this.authService.loginUser(this.user.email, this.user.password)
        .subscribe(data => {
          this.authService.setUser(data.user);
          const token = data.id;
          this.authService.setToken(token);
          this.router.navigate(['/user/profile']);
          location.reload();
        },
          res => {
              this.onIsError();
          }
        );
    } else {
      this.onIsError();
    }
  }

  onIsError(): void {
    this.error = true;
    setTimeout(() => {
      this.error = !this.error;
    }, 4000);
  }
}
