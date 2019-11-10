import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoComponentRoutingModule } from './demo-component-routing.module';
import { ControlComponent } from './components/control/control.component';
import { Cpm1Component } from './components/cpm1/cpm1.component';
import { Cpm2Component } from './components/cpm2/cpm2.component';
import { TransferDataService } from './services/transfer-data.service';

@NgModule({
  imports: [
    CommonModule,
    DemoComponentRoutingModule
  ],
  declarations: [
    ControlComponent,
    Cpm1Component,
    Cpm2Component
  ],
  providers: [
    TransferDataService
  ]
})
export class DemoComponentModule { }

