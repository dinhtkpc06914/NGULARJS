import {ListUsersComponent } from './list-user.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe('ListUsersComponent ', () => {
  let component:  ListUsersComponent ;
  let fixture: ComponentFixture< ListUsersComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  ListUsersComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( ListUsersComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
