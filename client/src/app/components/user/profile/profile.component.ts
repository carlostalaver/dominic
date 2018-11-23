import { UserInterface } from './../../../models/user-interface';
import { AuthService } from './../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  constructor(private authService: AuthService) { }

  user: UserInterface = null;
  ngOnInit() {
    this.user = this.authService.getCurrentUser();
    console.log(' estoy en profile ', this.user);
  }

}
