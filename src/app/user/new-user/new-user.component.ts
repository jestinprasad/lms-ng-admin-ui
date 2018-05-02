import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../users.service';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent implements OnInit {
  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
  }

  newUserRegister(form) {
    const {value} = form;
    this.userService.createUser(value)
    .then(data => {
      form.reset();
    })
   
  }

}