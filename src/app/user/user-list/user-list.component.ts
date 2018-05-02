import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  constructor(

    private router: Router ,
    private http : HttpClient,
    private userService : UsersService   

  ) { }

  users : any;

  ngOnInit() {
    this.http.get('http://localhost:3232/users').subscribe(data => {
      this.users = data;
    });  }
  
    goToEditUsers(index) {
      var id = this.users[index]._id;
      console.log(id);
      this.router.navigate(['/users/list', id]);
    }

  goToDeleteUsers(index){
    var id = this.users[index]._id;
    this.userService.deleteUser(id)
      .then(data => {
        this.users.splice(index, 1)
      })
      .catch(err => {
        console.log(err);
      })
  }

 
}
