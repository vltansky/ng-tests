import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {
      path: 'credit',
      loadChildren: () => import('./credit-cards/credit-cards.module').then(m => m.CreditCardsModule)
  },
  { path: 'loans2', loadChildren: () => import('./loans2/loans2.module').then(m => m.Loans2Module) },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
