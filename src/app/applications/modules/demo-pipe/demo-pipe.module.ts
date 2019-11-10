import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DemoPipeRoutingModule } from './demo-pipe-routing.module';
import { ControlComponent } from './components/control/control.component';
import { SortPipe } from './pipes/sort.pipe';

@NgModule({
  imports: [
    CommonModule,
    DemoPipeRoutingModule,
    FormsModule
  ],
  declarations: [ControlComponent, SortPipe]
})
export class DemoPipeModule { }
