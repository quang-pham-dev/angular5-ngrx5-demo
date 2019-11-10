import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';


@Injectable()
export class LibraryService {

  constructor() { }

  getBooks(): Observable<any> {
    return of([
      {
        book_name: 'How to stop worrying and start living',
        author: 'Dale Carnegie',
        image: './assets/img/books/how to stop worrying and start living.png'
      },
      {
        book_name: 'How to win friends and influence people',
        author: 'Dale Carnegie',
        image: './assets/img/books/how to win friends and influence people.png'
      }
    ]);
  }

  getAuthors(): Observable<any> {
    return of([
      {
        author_name: 'Dale Carnegie',
        image: './assets/img/authors/Dale Carnegie.png'
      }
    ]);
  }
}
