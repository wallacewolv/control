import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PenultimateStepComponent } from './penultimate-step.component';

describe('PenultimateStepComponent', () => {
  let component: PenultimateStepComponent;
  let fixture: ComponentFixture<PenultimateStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PenultimateStepComponent]
    });
    fixture = TestBed.createComponent(PenultimateStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
