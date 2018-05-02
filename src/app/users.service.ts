import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

const apiURL: string = 'http://localhost:3232/users';

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

  getUser(data){
    return this.http.get( apiURL, data)
    .toPromise()
    .then(data => {
      console.log(data);
      return data;
    })
    .catch(err => {
      console.log(err);
    })
  }

  loginUser(value){
    return value;
   }

   editUser(value){
    return value;
   }

   deleteUser(id){
    return this.http
    .delete(`${apiURL}/${id}`)
    .toPromise()
    .then(data => {
      return data
    })
    .catch(err => {
      console.error(err)
    })
   }

}
