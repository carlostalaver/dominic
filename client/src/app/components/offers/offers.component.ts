import { BookInterface } from './../../models/book-interface';
import { Component, OnInit } from '@angular/core';
import { DataApiService } from 'src/app/services/data-api.service';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.component.html',
  styleUrls: ['./offers.component.css']
})
export class OffersComponent implements OnInit {

  constructor( private dataApi: DataApiService) { }

  books: BookInterface;

  ngOnInit() {

    this.dataApi.getOffers()
          .subscribe((data: BookInterface) => (this.books = data));
  }

}
