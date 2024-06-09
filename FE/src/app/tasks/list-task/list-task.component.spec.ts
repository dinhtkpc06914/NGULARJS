import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListtaskComponent } from './list-task.component';

describe('ListtaskComponent', () => {
  let component: ListtaskComponent;
  let fixture: ComponentFixture<ListtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
