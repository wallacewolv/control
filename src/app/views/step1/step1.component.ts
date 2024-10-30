import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-step1',
  templateUrl: './step1.component.html',
  styleUrls: ['./step1.component.scss']
})
export class Step1Component {
  @Input() category: string = '';
  @Output() categoryChange = new EventEmitter<string>();  // Adicione esta linha
  @Output() next = new EventEmitter<void>();

  selectCategory(category: string) {
    this.category = category;
    this.categoryChange.emit(this.category);  // Emitir o valor atualizado
  }

  proceed() {
    if (this.category) {
      this.next.emit();
    }
  }
}
