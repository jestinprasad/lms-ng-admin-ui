import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../../users.service';
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
    private router : Router
    
  ) { }

  ngOnInit() {
    const userId = this.route.snapshot.params['id'];

    this.userService.getUserById(userId)
    .subscribe(data => this.user = data);
    

  }  

  updateUser(id) {
    const data = this.user;
    this.userService.updateUser(id, data)
      .subscribe(result => {
        console.log(result);
          this.router.navigate(['/users/list']);
        }, (err) => {
          console.log(err);
        }
      );
  }

  
}
