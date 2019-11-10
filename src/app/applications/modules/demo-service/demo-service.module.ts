import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoServiceRoutingModule } from './demo-service-routing.module';
import { ControlComponent } from './components/control/control.component';
import { LibraryService } from './services/library.service';

@NgModule({
  imports: [
    CommonModule,
    DemoServiceRoutingModule
  ],
  declarations: [
    ControlComponent
  ],
  providers: [
    LibraryService
  ]
})
export class DemoServiceModule { }
