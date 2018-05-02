import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../books.service';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-book-borrows',
  templateUrl: './book-borrows.component.html',
  styleUrls: ['./book-borrows.component.css']
})
export class BookBorrowsComponent implements OnInit {

  constructor(
    private http : HttpClient,
    private bookService : BooksService,
    private userService : UsersService    
  ) { }

  users :any;
  books : any;
  

  ngOnInit() {

    this.http.get('http://localhost:3232/books').subscribe(data => {
      const books = data;
      console.log(books);
    });
    
    this.http.get('http://localhost:3232/users').subscribe(data => {
      this.users = data;
      console.log(this.users);
     
    });

  }

  bookBorrowForm(form){
    const {value} = form;
    console.log(this.bookService.borrowBook(value));
  }

}
