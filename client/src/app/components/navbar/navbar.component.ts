import { AuthService } from './../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private authService: AuthService) { }
  public app_name = 'Books Store';
  public register = '/user/register';
  public list_books = '/admin/list-books';
  ngOnInit() {
    this.onCheckUser();
  }

  onLogout(): void {
    this.authService.logoutUser().subscribe(data => console.log('usuario logout', data));
  }

  onCheckUser(): boolean {
    if (isNullOrUndefined(this.authService.getCurrentUser())) {
      return false;
    } else {
      return true;
    }
  }
}
