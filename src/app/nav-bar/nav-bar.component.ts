import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
  
  states = [
    {
      title: 'Home',
      url: ''
    },
  {
    title: 'Users',
    url: '/users/list'
  },
  {
    title: 'Books',
    url: '/books/list'
  },
  {
    title: 'Books Borrow',
    url: '/books/borrow'
  }
];



  constructor(
    private router: Router
    
  ) { }

  ngOnInit() {
  }

}
