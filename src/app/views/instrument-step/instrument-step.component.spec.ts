import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentStepComponent } from './instrument-step.component';

describe('InstrumentStepComponent', () => {
  let component: InstrumentStepComponent;
  let fixture: ComponentFixture<InstrumentStepComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InstrumentStepComponent]
    });
    fixture = TestBed.createComponent(InstrumentStepComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
