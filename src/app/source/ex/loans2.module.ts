import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Loans2RoutingModule } from './loans2-routing.module';
import { Loans2Component } from './loans2.component';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { SharedModule } from 'app/shared/shared.module';

// import { BrowserModule } from '@angular/platform-browser';
// import { FlexLayoutModule } from '@angular/flex-layout';
// import { SwiperModule } from 'ngx-swiper-wrapper';
// import { NgSelectModule } from '@ng-select/ng-select';
// import { FormsModule } from '@angular/forms';
// import { ButtonsModule } from 'ngx-bootstrap';
// import { AccordionModule } from 'ngx-bootstrap';
// import { CollapseModule } from 'ngx-bootstrap';
// import { CarouselModule } from 'ngx-bootstrap';
// import { AlertModule } from 'ngx-bootstrap';
// import { ModalModule } from 'ngx-bootstrap';

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
    // CarouselModule.forRoot(),
    // CollapseModule.forRoot(),
    // AlertModule.forRoot(),
    // ModalModule.forRoot(),
    // ButtonsModule.forRoot(),
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
