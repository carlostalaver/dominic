import { BookInterface } from './../../models/book-interface';
import { DataApiService } from 'src/app/services/data-api.service';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Location } from '@angular/common';
import { isNullOrUndefined } from 'util';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(public dataApi: DataApiService,
              private location: Location) { }

  public titleModal = this.dataApi.titleModal;

  ngOnInit() {
  }
  onSaveBook(bookForm: NgForm): void {
    if (isNullOrUndefined(bookForm.value.bookId)) {
      this.dataApi.saveBook(bookForm.value).subscribe(book => location.reload());
    } else {
      this.dataApi.updateBook(bookForm.value).subscribe(book => location.reload());
    }
  }
}
