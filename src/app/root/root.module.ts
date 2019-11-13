import { NgModule } from '@angular/core';
import { CommonModule, LocationStrategy, HashLocationStrategy } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { RootRoutingModule } from './root-routing.module';
import { RootComponent } from './components/root/root.component';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    RootRoutingModule
  ],
  declarations: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ],
  providers: [
    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    },
	// config
  ]
})
export class RootModule { }
