import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  { path: 'original', loadChildren: () => import('./source/ex/loans2.module').then(m => m.BulkTestModule) },
    /*$REPLACE_ME$*/
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
