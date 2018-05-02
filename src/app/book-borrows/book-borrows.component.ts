import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BooksService } from '../books.service';
import { UsersService } from '../users.service';
// import { IMultiSelectOption } from 'angular-4-dropdown-multiselect';

@Component({
  selector: 'app-book-borrows',
  templateUrl: './book-borrows.component.html',
  styleUrls: ['./book-borrows.component.css']
})
export class BookBorrowsComponent implements OnInit {

  
  // optionsModel: number[];
    // myOptions: IMultiSelectOption[];

  constructor(
    private http : HttpClient,
    private bookService : BooksService,
    private userService : UsersService    
  ) { }

  users :any;
  books : any;
  

  ngOnInit() {

    
    this.bookService.getBooks()
    .subscribe(data => {
      this.books = data;
      console.log(this.books);      
    });

    this.userService.getUser()
    .subscribe(data => {
      this.users = data;
      console.log(this.users);
    }) 

  //   this.myOptions = [
  //     { id: 1, name: 'Option 1' },
  //     { id: 2, name: 'Option 2' },
  // ];

  }

  

//   onChange() {
//     console.log(this.optionsModel);
// }

  bookBorrowForm(form){
    const {value} = form;
    // console.log(this.bookService.borrowBook(value));
    console.log(value);
  }

}
