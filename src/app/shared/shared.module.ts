import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';

import { FlexLayoutModule } from '@angular/flex-layout';
// replace me sometime vlad
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { AccordionModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    AlertModule.forRoot(),
    CommonModule,
    SwiperModule,
    FlexLayoutModule,
    BrowserModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    AccordionModule,
    AlertModule,
    CommonModule,
    SwiperModule,
    FlexLayoutModule,
    BrowserModule,
    NgSelectModule,
    FormsModule
  ]
})
export class SharedModule { }
