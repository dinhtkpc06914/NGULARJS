import { usersComponent } from './user.component';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';


describe(' usersComponent ', () => {
  let component:  usersComponent ;
  let fixture: ComponentFixture< usersComponent >;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [  usersComponent  ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent( usersComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
