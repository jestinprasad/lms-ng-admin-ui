import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  book = {};

  constructor(    

    private route: ActivatedRoute,
    private bookService : BooksService,
    private router : Router

  ) { }

  ngOnInit() {

    this.bookService.getBookById(this.route.snapshot.params['id'])
    .subscribe(data => {
      this.book = data;
    });

  }



  updateBook(id) {
    const data = this.book;

    this.bookService.updateBook(id, data)
      .subscribe(result => {
        console.log(result);
          this.router.navigate(['/books/list']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  
}
