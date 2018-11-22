import { BookInterface } from './../../models/book-interface';
import { DataApiService } from './../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-details-book',
  templateUrl: './details-book.component.html',
  styleUrls: ['./details-book.component.css']
})
export class DetailsBookComponent implements OnInit {

  constructor(private dataApi: DataApiService, private route: ActivatedRoute) { }

  book: BookInterface = {
    titulo: '',
    idioma: '',
    descripcion: '',
    portada: '',
    precio: '',
    link_amazon: '',
    autor: '',
    oferta: ''
  };


  ngOnInit() {
    const book_id = this.route.snapshot.params['id'];
    this.getDetails(book_id);
  }

  getDetails(id: string) {
    this.dataApi.getBookById(id)
        .subscribe(book => (this.book = book));
  }
}
