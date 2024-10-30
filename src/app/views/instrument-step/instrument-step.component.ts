import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-instrument-step',
  templateUrl: './instrument-step.component.html',
  styleUrls: ['./instrument-step.component.css']
})
export class InstrumentStepComponent {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  instruments: string[] = []; // Array de instrumentos

  addInstrument(instrument: string) {
    this.instruments.push(instrument);
  }

  proceed() {
    this.next.emit();
  }
}
