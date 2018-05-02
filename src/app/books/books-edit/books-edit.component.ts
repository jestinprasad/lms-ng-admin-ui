import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from '../../books.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-edit',
  templateUrl: './books-edit.component.html',
  styleUrls: ['./books-edit.component.css']
})
export class BooksEditComponent implements OnInit {

  book : any = {};

  constructor(    

    private route: ActivatedRoute,
    private bookService : BooksService,
    private http : HttpClient,
    private router : Router

  ) { }

  ngOnInit() {

    this.getBook(this.route.snapshot.params['id']);

  }

  getBook(id) {
    this.http.get('http://localhost:3232/books/'+id).subscribe(data => {
      this.book = data;
    });
    
  }

  updateBook(id) {
    const data = this.book;
    console.log(this.book, 'Update');
    this.http.put('http://localhost:3232/books/'+id, data)
      .subscribe(result => {
        console.log(result);
          this.router.navigate(['/books/list']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  
}
