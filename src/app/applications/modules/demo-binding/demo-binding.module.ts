import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoBindingRoutingModule } from './demo-binding-routing.module';
import { ControlComponent } from './components/control/control.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoBindingRoutingModule,
    FormsModule
  ],
  declarations: [
    ControlComponent
  ]
})
export class DemoBindingModule { }
