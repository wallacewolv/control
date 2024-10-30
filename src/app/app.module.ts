import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Step1Component } from './views/step1/step1.component';
import { Step2Component } from './views/step2/step2.component';
import { Step3Component } from './views/step3/step3.component';
import { InstrumentStepComponent } from './views/instrument-step/instrument-step.component';
import { PenultimateStepComponent } from './views/penultimate-step/penultimate-step.component';
import { FinalStepComponent } from './views/final-step/final-step.component';

@NgModule({
  declarations: [
    AppComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    InstrumentStepComponent,
    PenultimateStepComponent,
    FinalStepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
