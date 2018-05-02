import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  login = [
    {
      title : 'Login',
      url : '/login'
    }
  ];

  books = [
    {
      title: 'New Book',
      url: '/books/new'
    },
    {
      title: 'Book List',
      url: '/books/list'
    },
    {
      title: 'Books Borrow',
      url: '/books/borrow'
    }
  ];

  users = [
    {
      title: 'New User',
      url: '/users/new'
    },
    {
      title: 'User List',
      url: '/users/list'
    }
  ];


  constructor(

    private router: Router

  ) { }

  ngOnInit() {
  }

}
