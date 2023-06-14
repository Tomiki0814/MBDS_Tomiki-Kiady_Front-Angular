import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewassignmentsComponent } from './newassignments.component';

describe('NewassignmentsComponent', () => {
  let component: NewassignmentsComponent;
  let fixture: ComponentFixture<NewassignmentsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [NewassignmentsComponent]
    });
    fixture = TestBed.createComponent(NewassignmentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
