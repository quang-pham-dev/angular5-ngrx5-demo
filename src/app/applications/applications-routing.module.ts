import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DesktopLayoutComponent } from './components/desktop-layout/desktop-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'demo-component',
    pathMatch: 'full'
  },
  {
    path: '',
    component: DesktopLayoutComponent,
    children: [
      {
        path: 'demo-component',
        loadChildren: './modules/demo-component/demo-component.module#DemoComponentModule'
      },
      {
        path: 'demo-directive',
        loadChildren: './modules/demo-directive/demo-directive.module#DemoDirectiveModule'
      },
      {
        path: 'demo-pipe',
        loadChildren: './modules/demo-pipe/demo-pipe.module#DemoPipeModule'
      },
      {
        path: 'demo-service',
        loadChildren: './modules/demo-service/demo-service.module#DemoServiceModule'
      },
      {
        path: 'demo-guard',
        loadChildren: './modules/demo-guard/demo-guard.module#DemoGuardModule'
      },
      {
        path: 'demo-binding',
        loadChildren: './modules/demo-binding/demo-binding.module#DemoBindingModule'
      },
      {
        path: 'demo-routing',
        loadChildren: './modules/demo-routing/demo-routing.module#DemoRoutingModule'
      },
      {
        path: 'demo-io',
        loadChildren: './modules/demo-io/demo-io.module#DemoIoModule'
      },
      {
        path: 'demo-form',
        loadChildren: './modules/demo-form/demo-form.module#DemoFormModule'
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ApplicationsRoutingModule { }
