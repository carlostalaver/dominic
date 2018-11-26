import { BookInterface } from './../../../models/book-interface';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor(private dataService: DataApiService) { }
  p: number = 1;

  books: BookInterface;
  ngOnInit() {
    this.getListBook();
    console.log('init del componente list');
  }

  getListBook(): void {
    this.dataService.getAllBooks()
      .subscribe((books: BookInterface) => {
        (this.books = books);
      });
  }

  onDeleteBook(id: string): void {
    if (confirm('Are you sure to delete?')) {
      this.dataService.deleteBook(id)
        .subscribe();
    }
  }

  onPreUpdateBook(book: BookInterface): void {
    this.dataService.selectedBook = Object.assign({}, book);
    this.dataService.titleModal = 'Update Book';
  }

  resetForm(bookForm?: NgForm) {
      this.dataService.selectedBook = {
        id: null,
        titulo: '',
        idioma: '',
        descripcion: '',
        portada: '',
        precio: '',
        link_amazon: '',
        autor: '',
        oferta: ''
      };

      this.dataService.titleModal = 'New Book';
  }

}
