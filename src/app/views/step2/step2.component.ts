import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step2',
  templateUrl: './step2.component.html',
  styleUrls: ['./step2.component.scss']
})
export class Step2Component {
  @Input() structure: string = '';
  @Output() structureChange = new EventEmitter<string>();  // Adicione esta linha
  @Output() next = new EventEmitter<void>();
  @Output() previous = new EventEmitter<void>();

  selectStructure(structure: string) {
    this.structure = structure;
    this.structureChange.emit(this.structure);  // Emitir o valor atualizado
  }

  proceed() {
    if (this.structure) {
      this.next.emit();
    }
  }

  goBack() {
    this.previous.emit();
  }
}
