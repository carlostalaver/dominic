import { UserInterface } from './../../../models/user-interface';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router) { }

  public error = false;
  public msgError: any = '';

  user: UserInterface =  {
    name: '',
    email: '',
    password: ''
  };

  ngOnInit() {
  }

  onRegister(formulario: NgForm): void {
    if (formulario.valid) {
    this.authService.registreUser( this.user.name, this.user.email, this.user.password)
      .subscribe(user => {
        this.authService.setUser(user);
        const token = user.id;
        this.authService.setToken(token);
        this.route.navigate(['/user/profile']);
        location.reload();
      },
       resp => {
         console.log('El erro es: ', resp.error);
         console.log('El mensaje es el siguiente ', resp.error.error.details);
        // this.msgError = resp.error.details;
       });
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
