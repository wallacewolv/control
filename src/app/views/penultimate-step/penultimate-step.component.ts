import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-penultimate-step',
  templateUrl: './penultimate-step.component.html',
  styleUrls: ['./penultimate-step.component.css']
})
export class PenultimateStepComponent {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  registration: string = '';
  email: string = '';
  date: string = '';

  proceed() {
    if (this.registration && this.email && this.date) {
      this.next.emit();
    }
  }
}
