import { Component, OnInit } from '@angular/core';
import { LibraryService } from '../../services/library.service';

@Component({
  selector: 'app-control',
  templateUrl: './control.component.html',
  styleUrls: ['./control.component.scss']
})
export class ControlComponent implements OnInit {

  constructor(
    private libraryService: LibraryService
  ) { }

  public books = [];
  public authors = [];

  ngOnInit() {
  }

  getAuthors() {
    this.books = [];
    this.libraryService.getAuthors().subscribe(
      data => {
        this.authors = data;
      }
    );
  }

  getBooks() {
    this.authors = [];
    this.libraryService.getBooks().subscribe(
      data => {
        this.books = data;
      }
    );
  }
}
