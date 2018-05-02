import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL: string = 'http://localhost:3232/api/books';

@Injectable()
export class BooksService {

  constructor(
    private http : HttpClient
  ) { }

  getBooks(id?) {
    let url = apiURL;
    if (id) {
      url = `${url}/${id}`
    }

    return this.http.get(url);
  }

  getBookById(id) {
    return this.getBooks(id);
  }

  createBook(value){
   return this.http.post(apiURL, value)
     
  }

  updateBook(id, data) {
    const url = `${apiURL}/${id}`;

    return this.http
    .put(url, data);
   }

  deleteBook(id) {
    const url = `${apiURL}/${id}`;
    return this.http
    .delete(url);
   }

  // listBook(value){
  //   return this.http.get(apiURL, value)
  //   .toPromise()
  //   .then((value : any) => {
  //     return value;
  //   })
  //   .catch(err => {
  //     console.log(err);
  //   })
  // }

  editBook(value){
     return value;
   }

  borrowBook(value){
    return value;
  } 

}
