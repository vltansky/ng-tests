import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Loans2RoutingModule } from './loans2-routing.module';
import { Loans2Component } from './loans2.component';
import { LoansComponent } from '../loans/loans.component';
import { I18nComponent } from '../i18n/i18n.component';


@NgModule({
  declarations: [
    Loans2Component],
  imports: [
    CommonModule,
    Loans2RoutingModule
  ]
})
export class k2Module { }
