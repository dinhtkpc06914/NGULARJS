import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PagenotfundComponent } from './pagenotfund.component';

describe('PagenotfundComponent', () => {
  let component: PagenotfundComponent;
  let fixture: ComponentFixture<PagenotfundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PagenotfundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PagenotfundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
