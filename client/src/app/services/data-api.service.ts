import { BookInterface } from './../models/book-interface';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class DataApiService {
  books: Observable<any>;
  book: Observable<any>;

  constructor(private http: HttpClient, private authService: AuthService) { }

  headers: HttpHeaders = new HttpHeaders({
    'Content-Type': 'application/json',
     Authorization: this.authService.getToken()
  });

  // Retorna todos los libros
  getAllBooks() {
    const url_api = 'http://localhost:3000/api/books';
    return this.http.get(url_api);
  }

  getNotOffers() {
    const url_api = 'http://localhost:3000/api/books?filter[where][oferta]=0';
    return this.http.get(url_api);
  }



  getBookById(id: string) {
    const url_api = `http://localhost:3000/api/books/${id}`;
    this.book = this.http.get(url_api);
    return this.book;
  }

  getOffers() { // Pilas con esta busqueda
    const url_api = 'http://localhost:3000/api/books?filter[where][oferta]=1';
    return (this.books = this.http.get(url_api));
  }

  saveBook(book: BookInterface) {
    // TODO: Obtener token
    // TODO: NOt Null
    const token = this.authService.getToken();
    const url_api =  `http://localhost:3000/api/books?access_token=${token}`;
    return this.http.post<BookInterface>(url_api, book, {headers: this.headers})
              .pipe(map(data => data ));
  }

  updateBook(book) {
    // TODO: Obtener token
    // TODO: NOt Null
    const token = this.authService.getToken();
    const url_api =  `http://localhost:3000/api/books?access_token=${token}`;
    return this.http.put<BookInterface>(url_api, book, {headers: this.headers})
              .pipe(map(data => data ));
  }


  deleteBook(id: string) {
    // TODO: Obtener token
    // TODO: NOt Null
    const token = this.authService.getToken();
    const url_api =  `http://localhost:3000/api/books/${id}?access_token=${token}`;
    return this.http.delete<BookInterface>(url_api, {headers: this.headers})
              .pipe(map(data => data ));
  }
}
