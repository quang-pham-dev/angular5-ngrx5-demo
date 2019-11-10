import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoFormRoutingModule } from './demo-form-routing.module';
import { ControlComponent } from './components/control/control.component';
import { ReactiveComponent } from './components/reactive/reactive.component';
import { TemplateDrivenComponent } from './components/template-driven/template-driven.component';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoFormRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  declarations: [
    ControlComponent,
    ReactiveComponent,
    TemplateDrivenComponent
  ]
})
export class DemoFormModule { }
