import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoGuardRoutingModule } from './demo-guard-routing.module';
import { ControlComponent } from './components/control/control.component';
import { Page1Component } from './components/page1/page1.component';
import { Page2Component } from './components/page2/page2.component';
import { Page3Component } from './components/page3/page3.component';
import { PermissionGuard } from './guards/permission.guard';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    DemoGuardRoutingModule,
    FormsModule
  ],
  declarations: [
    ControlComponent,
    Page1Component,
    Page2Component,
    Page3Component
  ],
  providers: [
    PermissionGuard
  ]
})
export class DemoGuardModule { }
