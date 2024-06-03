import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjeactDetailsComponent } from './projeact-details.component';

describe('ProjeactDetailsComponent', () => {
  let component: ProjeactDetailsComponent;
  let fixture: ComponentFixture<ProjeactDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProjeactDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjeactDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
