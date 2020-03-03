import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FlexLayoutModule } from '@angular/flex-layout';
// replace me sometime vlad
import { SwiperModule } from 'ngx-swiper-wrapper';
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import { ButtonsModule } from 'ngx-bootstrap';
import { AccordionModule } from 'ngx-bootstrap';
import { CollapseModule } from 'ngx-bootstrap';
import { CarouselModule } from 'ngx-bootstrap';
import { AlertModule } from 'ngx-bootstrap';
import { ModalModule } from 'ngx-bootstrap';
import { NgSelectModule } from '@ng-select/ng-select';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    AccordionModule.forRoot(),
    CarouselModule.forRoot(),
    CollapseModule.forRoot(),
    AlertModule.forRoot(),
    ModalModule.forRoot(),
    ButtonsModule.forRoot(),
    CommonModule,
    SwiperModule,
    FlexLayoutModule,
    NgSelectModule,
    FormsModule
  ],
  exports: [
    ModalModule,
    CarouselModule,
    CollapseModule,
    AlertModule,
    ButtonsModule,
    AccordionModule,
    AlertModule,
    CommonModule,
    SwiperModule,
    FlexLayoutModule,
    NgSelectModule,
    FormsModule
  ]
})
export class SharedModule { }
