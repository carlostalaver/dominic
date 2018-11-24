import { AuthService } from './../services/auth.service';
import { Injectable } from '@angular/core';
import { CanActivate,  Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authService: AuthService, private router: Router) { }
  canActivate(): boolean {
    if (this.authService.getCurrentUser()) {
      return true;
    } else {
      this.router.navigate(['/user/login']);
      return false;
    }
  }
}
