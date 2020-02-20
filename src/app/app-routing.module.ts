import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    { path: 'url1', loadChildren: () => import('./tests/module1/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url2', loadChildren: () => import('./tests/module2/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url3', loadChildren: () => import('./tests/module3/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url4', loadChildren: () => import('./tests/module4/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url5', loadChildren: () => import('./tests/module5/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url6', loadChildren: () => import('./tests/module6/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url7', loadChildren: () => import('./tests/module7/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url8', loadChildren: () => import('./tests/module8/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url9', loadChildren: () => import('./tests/module9/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url10', loadChildren: () => import('./tests/module10/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url11', loadChildren: () => import('./tests/module11/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url12', loadChildren: () => import('./tests/module12/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url13', loadChildren: () => import('./tests/module13/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url14', loadChildren: () => import('./tests/module14/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url15', loadChildren: () => import('./tests/module15/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url16', loadChildren: () => import('./tests/module16/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url17', loadChildren: () => import('./tests/module17/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url18', loadChildren: () => import('./tests/module18/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url19', loadChildren: () => import('./tests/module19/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url20', loadChildren: () => import('./tests/module20/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url21', loadChildren: () => import('./tests/module21/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url22', loadChildren: () => import('./tests/module22/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url23', loadChildren: () => import('./tests/module23/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url24', loadChildren: () => import('./tests/module24/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url25', loadChildren: () => import('./tests/module25/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url26', loadChildren: () => import('./tests/module26/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url27', loadChildren: () => import('./tests/module27/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url28', loadChildren: () => import('./tests/module28/loans2.module').then(m => m.BulkTestModule) },
{ path: 'url29', loadChildren: () => import('./tests/module29/loans2.module').then(m => m.BulkTestModule) }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
