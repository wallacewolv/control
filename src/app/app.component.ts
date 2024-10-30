import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  currentStep: number = 1;
  category: string = '';
  structure: string = '';

  // Método para avançar para o próximo step
  nextStep() {
    if (this.currentStep === 1 && this.category) {
      this.currentStep++;
    } else if (this.currentStep === 2 && this.structure) {
      this.currentStep++;
    } else if (this.currentStep === 3) {
      this.currentStep++;
    } else if (this.currentStep > 3) {
      this.currentStep++;
    }
  }

  // Método para voltar para o step anterior
  previousStep() {
    if (this.currentStep > 1) {
      this.currentStep--;
    }
  }

  // Verifica se deve mostrar o Step 3
  shouldShowStep3(): boolean {
    return this.structure === 'ndf' || this.structure === 'commodity';
  }
}
