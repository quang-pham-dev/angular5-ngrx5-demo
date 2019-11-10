import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DemoIoRoutingModule } from './demo-io-routing.module';
import { ParentComponent } from './components/parent/parent.component';
import { ChildComponent } from './components/child/child.component';

@NgModule({
  imports: [
    CommonModule,
    DemoIoRoutingModule
  ],
  declarations: [
    ParentComponent,
    ChildComponent
  ]
})
export class DemoIoModule { }
