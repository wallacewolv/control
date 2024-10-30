import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-step3',
  templateUrl: './step3.component.html',
  styleUrls: ['./step3.component.scss']
})
export class Step3Component {
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();
  method: 'manual' | 'spreadsheet' = 'manual';

  selectMethod(method: 'manual' | 'spreadsheet') {
    this.method = method;
  }

  proceed() {
    this.next.emit();
  }
}
