import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Loans2Component } from './loans2.component';

const routes: Routes = [{ path: '', component: Loans2Component }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Loans2RoutingModule { }
