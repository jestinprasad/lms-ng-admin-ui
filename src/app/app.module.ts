import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule }   from '@angular/forms';
import { RouterModule, Routes} from '@angular/router';
import {UsersService} from './users.service';
import {BooksService} from './books.service';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BooksEditComponent } from './books/books-edit/books-edit.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { NewBookComponent } from './books/new-book/new-book.component';
import { NewUserComponent } from './user/new-user/new-user.component';
import { UserListComponent } from './user/user-list/user-list.component';
import { EditUserComponent } from './user/edit-user/edit-user.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { BookBorrowsComponent } from './book-borrows/book-borrows.component';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },  
  {
    path: 'books/new',
    component: NewBookComponent
  },
  {
    path: 'books/list',
    children: [
      {
        path: '',
        component: BooksListComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: BooksEditComponent
      }
    ]
  },
  {
    path: 'books/edit',
    component: BooksEditComponent
  },
  {
    path: 'books/borrow',
    component: BookBorrowsComponent
  },
  {
    path: 'users/new',
    component: NewUserComponent
  },
  {
    path: 'users/list',
    children: [
      {
        path: '',
        component: UserListComponent,
        pathMatch: 'full'
      },
      {
        path: ':id',
        component: EditUserComponent
      }
    ]
  },
  {
    path: '',
    component: DashboardComponent,
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: ''
  }
];


@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    BooksEditComponent,
    LoginComponent,
    DashboardComponent,
    NewBookComponent,
    NewUserComponent,
    UserListComponent,
    EditUserComponent,
    NavBarComponent,
    BookBorrowsComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes),
    AngularMultiSelectModule
  ],
  providers: [
    UsersService,
    BooksService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
