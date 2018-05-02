import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';

@Component({
  selector: 'app-new-book',
  templateUrl: './new-book.component.html',
  styleUrls: ['./new-book.component.css']
})
export class NewBookComponent implements OnInit {
  constructor(
    private bookService : BooksService    
  ) { }

  ngOnInit() {
  }

  newBookRegister(form) {
    const {value} = form;
    this.bookService.createBook(value)
    .subscribe(data => {
      form.reset();
      
    })
  }

}
