import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {

  constructor(
    private bookService : BooksService,
    private router: Router
    
  ) { }

  ngOnInit() {
  }

  newBookRegister(book) {
    const {value} = book.form;
    this.bookService.createBook(value)
    .then(data => {
      console.log(data);
      this.router.navigate(['/books/list']);
    })
  }

}
