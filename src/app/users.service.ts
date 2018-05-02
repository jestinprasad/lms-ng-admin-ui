import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL: string = 'http://localhost:3232/api/users';

@Injectable()

export class UsersService {

  constructor(
    private http : HttpClient
  ) { }

  

  createUser(value){
    return this.http.post( apiURL, value)
     .toPromise()
     .then((value : any) => {
       return value;
     })
     .catch(err => {
       console.log(err);
     })
   
  }

  getUserById(id) {
    const url = `${apiURL}/${id}`;
    return this.http.get(url);
  }


  getUser(){
    return this.http.get(apiURL);
  }

  loginUser(value){
    return value;
   }

   updateUser(id, data){
     const url = `${apiURL}/${id}`;
    return this.http.put(url, data);
   }

   deleteUser(id) {
    const url = `${apiURL}/${id}`;
     
    return this.http
    .delete(url)
   }

}
