import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {

  user : any = {};
  
  constructor(

    private route: ActivatedRoute,
    private userService : UsersService,
    private http : HttpClient,
    private router : Router
    
  ) { }

  ngOnInit() {

    this.getUser(this.route.snapshot.params['id']);

  }  

  getUser(id) {
    this.http.get('http://localhost:3232/users/'+id).subscribe(data => {
      this.user = data;
    });
    
  }

  updateUser(id) {
    const data = this.user;
    console.log(this.user, 'Update');
    this.http.put('http://localhost:3232/users/'+id, data)
      .subscribe(result => {
        console.log(result);
          this.router.navigate(['/users/list']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  
}
