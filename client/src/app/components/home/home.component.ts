import { BookInterface } from './../../models/book-interface';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private dataApi: DataApiService) { }
  books: BookInterface;

  ngOnInit() {
    this.getListBooks();
  }

  getListBooks() {
      this.dataApi
        .getNotOffers()
        .subscribe((books: BookInterface) => (this.books = books));
    }
}
