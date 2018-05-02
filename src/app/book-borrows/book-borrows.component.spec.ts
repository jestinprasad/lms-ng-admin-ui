import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookBorrowsComponent } from './book-borrows.component';

describe('BookBorrowsComponent', () => {
  let component: BookBorrowsComponent;
  let fixture: ComponentFixture<BookBorrowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookBorrowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookBorrowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
