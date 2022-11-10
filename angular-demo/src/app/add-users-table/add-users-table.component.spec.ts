import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddUsersTableComponent } from './add-users-table.component';

describe('AddUsersTableComponent', () => {
  let component: AddUsersTableComponent;
  let fixture: ComponentFixture<AddUsersTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddUsersTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddUsersTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
