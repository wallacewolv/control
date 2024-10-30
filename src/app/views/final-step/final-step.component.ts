import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-final-step',
  templateUrl: './final-step.component.html',
  styleUrls: ['./final-step.component.css']
})
export class FinalStepComponent {
  @Output() previous = new EventEmitter<void>();

  uploadFile(event: any) {
    const file = event.target.files[0];
    // Aqui você pode implementar a lógica para fazer upload do arquivo
  }
}
