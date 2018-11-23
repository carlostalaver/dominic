import { UserInterface } from './../../../models/user-interface';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }
  user: UserInterface = {
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  onLogin() {
    this.authService.loginUser(this.user.email, this.user.password)
      .subscribe(data => {
        this.authService.setUser(data.user);
        const token = data.id;
        this.authService.setToken(token);
        this.router.navigate(['/user/profile']);
      },
        res => console.log(' el error ocurrido es ', res)
      );
  }
}
