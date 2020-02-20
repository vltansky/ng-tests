import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Loans2RoutingModule } from './loans2-routing.module';
import { Loans2Component } from './loans2.component';
// import { BrowserModule } from '@angular/platform-browser';

// import { FlexLayoutModule } from '@angular/flex-layout';
// // replace me sometime vlad
// import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SharedModule } from 'app/shared/shared.module';
// import { AccordionModule } from 'ngx-bootstrap';
// import { AlertModule } from 'ngx-bootstrap';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { FormsModule } from '@angular/forms';

const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 1,
  centeredSlides: true
};


@NgModule({
  declarations: [
    Loans2Component
  ],
  imports: [
    CommonModule,
    Loans2RoutingModule,
    SharedModule,
    // AccordionModule.forRoot(),
    // AlertModule.forRoot(),
    // SwiperModule,
    // FlexLayoutModule,
    // BrowserModule,
    // NgSelectModule,
    // FormsModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ]
})
export class BulkTestModule { }
