import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentComponent } from './components/parent/parent.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'parent',
    pathMatch: 'full'
  },
  {
    path: 'parent',
    component: ParentComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoIoRoutingModule { }
