import { Component, OnInit } from '@angular/core';
import { BooksService } from '../../books.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  
  constructor(
    private bookService : BooksService,
    private router: Router
  ) { }

  books : any;
  

  ngOnInit() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    });
  }

    
  goToEditBooks(index) {
    var id = this.books[index]._id;
    if (!id) {
      return;
    }
    console.log(id);
    this.router.navigate(['/books/list', id]);
  }

  goToDeleteBooks(index){
    var id = this.books[index]._id;
    this.bookService.deleteBook(id)
      .subscribe(data => {
        this.books.splice(index, 1)
      });
  }

}
