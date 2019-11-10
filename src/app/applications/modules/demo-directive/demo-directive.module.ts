import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DemoDirectiveRoutingModule } from './demo-directive-routing.module';
import { ControlComponent } from './components/control/control.component';
import { DndFileComponent } from './components/dnd-file/dnd-file.component';
import { UploadFileDirective } from './directives/upload-file.directive';

@NgModule({
  imports: [
    CommonModule,
    DemoDirectiveRoutingModule
  ],
  declarations: [
    ControlComponent,
    DndFileComponent,
    UploadFileDirective
  ]
})
export class DemoDirectiveModule { }
