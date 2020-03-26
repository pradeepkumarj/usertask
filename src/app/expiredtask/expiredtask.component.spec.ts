import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpiredtaskComponent } from './expiredtask.component';

describe('ExpiredtaskComponent', () => {
  let component: ExpiredtaskComponent;
  let fixture: ComponentFixture<ExpiredtaskComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ExpiredtaskComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpiredtaskComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
