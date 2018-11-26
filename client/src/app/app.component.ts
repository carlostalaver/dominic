import { Component, OnInit } from '@angular/core';
import { RouterModule, Router, NavigationEnd} from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  constructor(private router: Router, private spinnerService: NgxSpinnerService) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        console.log('el event ', event);
        if (event.url.match('/user/') || event.url.match('/admin/') ) {
          this.hideElement = true;
        } else {
          this.hideElement = false;
        }
      }
    });
  }

  title = 'Book';

  hideElement = false;

  ngOnInit( ) {
    this.spinner();
  }

  spinner() {
    this.spinnerService.show();
    setTimeout(() => {
      this.spinnerService.hide();
    }, 2000);
  }
}
