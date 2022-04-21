import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompDemoComponent } from './comp-demo.component';

describe('CompDemoComponent', () => {
  let component: CompDemoComponent;
  let fixture: ComponentFixture<CompDemoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompDemoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
