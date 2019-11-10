import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoRoutingRoutingModule } from './demo-routing-routing.module';
import { ControlComponent } from './components/control/control.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';

@NgModule({
  imports: [
    CommonModule,
    DemoRoutingRoutingModule
  ],
  declarations: [
    ControlComponent,
    Page1Component,
    Page2Component,
    Page3Component]
})
export class DemoRoutingModule { }
