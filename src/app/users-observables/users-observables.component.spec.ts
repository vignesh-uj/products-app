import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsersObservablesComponent } from './users-observables.component';

describe('UsersObservablesComponent', () => {
  let component: UsersObservablesComponent;
  let fixture: ComponentFixture<UsersObservablesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsersObservablesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsersObservablesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
