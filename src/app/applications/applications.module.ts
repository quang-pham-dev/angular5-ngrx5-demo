import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApplicationsRoutingModule } from './applications-routing.module';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';
import { AppFooter } from '../shared/components/app-footer/app-footer.component';
import { AppHeader } from '../shared/components/app-header/app-header.component';
import { AppSidebar } from '../shared/components/app-sidebar/app-sidebar.component';
import { SidebarDirective } from '../shared/directives/sidebar.directive';
// Components in app
const APP_COMPONENTS = [
  DesktopLayoutComponent,
  AppFooter,
  AppHeader,
  AppSidebar
];
// Services in app
const APP_SERVICES = [

];
// Pipes in app
const APP_PIPES = [

];
// Guards in app
const APP_GUARDS = [
  
];
// Directives in app
const APP_DIRECTIVES = [
  SidebarDirective
];

@NgModule({
  imports: [
    CommonModule,
    ApplicationsRoutingModule
  ],
  declarations: [
    ...APP_COMPONENTS,
    ...APP_PIPES,
    ...APP_DIRECTIVES
  ],
  providers: [
    ...APP_SERVICES,
    ...APP_GUARDS
  ]
})
export class ApplicationsModule { }
