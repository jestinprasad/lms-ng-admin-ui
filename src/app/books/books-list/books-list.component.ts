import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  
  constructor(
    private bookService : BooksService,
    private http : HttpClient,
    private router: Router
  ) { }

  books : any;
  

  ngOnInit() {
    this.http.get('http://localhost:3232/books').subscribe(data => {
      this.books = data;
    });
  }

    
  goToEditBooks(index) {
    var id = this.books[index]._id;
    console.log(id);
    this.router.navigate(['/books/list', id]);
  }

  goToDeleteBooks(index){
    var id = this.books[index]._id;
    this.bookService.deleteBook(id)
      .then(data => {
        this.books.splice(index, 1)
      })
      .catch(err => {
        console.log(err);
      })
  }

}
