import { Component, OnInit } from '@angular/core';
import { UsersService } from '../users.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(
    private userService: UsersService
  ) { }

  ngOnInit() {
  }

   loginForm(form) {
    const {value} = form;
    this.userService.loginUser(value)
    .subscribe(data => {
      form.reset();
    })
   
  }

}
