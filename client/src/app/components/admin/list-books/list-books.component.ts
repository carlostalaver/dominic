import { BookInterface } from './../../../models/book-interface';
import { DataApiService } from './../../../services/data-api.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-books',
  templateUrl: './list-books.component.html',
  styleUrls: ['./list-books.component.css']
})
export class ListBooksComponent implements OnInit {

  constructor(private dataService: DataApiService) { }

  books: BookInterface;

  ngOnInit() {
    this.getListBook();
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

}
