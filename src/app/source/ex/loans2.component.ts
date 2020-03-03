import { Component, TemplateRef, OnInit, ChangeDetectionStrategy, ViewChild, Input, Renderer2 } from '@angular/core';
import { DataService, Person } from './data.service';
import { Observable } from 'rxjs';
// import _data from './data_resource.json';
const _data = {vlad:'vlad'};
import { SwiperComponent, SwiperDirective, SwiperConfigInterface,
  SwiperScrollbarInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { ResourceService } from 'app/shared/resource.service';
import { Base } from 'app/shared/base';
import { LoggerService } from 'app/shared/logger.service';
import { resourceComponent } from 'app/shared/resourceComponent';

@Component({
  selector: 'app-loans2',
  templateUrl: './loans2.component.html',
  styleUrls: ['./loans2.component.scss'],
  providers: [ResourceService]
})
export class Loans2Component extends Base implements OnInit {

  isCollapsed = false;
  people$: Observable<Person[]>;
  selectedPersonId = '5a15b13c36e7a7f00cf0d7cb';
  modalRef: BsModalRef;
  test;

  constructor(public resService: ResourceService,
    private modalService: BsModalService,
    private renderer: Renderer2,
    private dataService: DataService,
    private log: LoggerService) {
    super(log, resService, 'res2');
    console.log(this);
    let test = $localize`:@@home.greetings:`;
    console.log(test)
    // console.log(this.data);
    // console.log('now?');
    // this.logger.debug("vlad the Debugger");
  }

  
  // async getData(){
  //   this.test = await this.resService.getKey("vlad");
  // }

 
  public openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }
  // async loadResources(){
  //   await this.resService.load("res2");
  // }

  onInit() {
    console.log('oninit');
      // this.resService.resourcePath = "res2";
      this.test = this.resService.getKey('vlad.test.example');
      this.people$ = this.dataService.getPeople();
  }
  data = _data;

  onClick(){
  }
  changeBody(){
    this.renderer.addClass(document.body, 'vladvar');
  }

  // getValue(key){
  //   console.log('getting val loans 2');
  //   return _data[key];
  // }
  get runChangeDetection() {
    console.log('Checking the view');
    return true;
  }

  
  public show: boolean = true;

  public slides = [
    'First slide',
    'Second slide',
    'Third slide',
    'Fourth slide',
    'Fifth slide',
    'Sixth slide'
  ];

  public type: string = 'component';

  public disabled: boolean = false;

  public config: SwiperConfigInterface = {
    a11y: true,
    direction: 'horizontal',
    slidesPerView: 1,
    keyboard: true,
    mousewheel: true,
    scrollbar: false,
    navigation: true,
    pagination: false
  };

  private scrollbar: SwiperScrollbarInterface = {
    el: '.swiper-scrollbar',
    hide: false,
    draggable: true
  };

  private pagination: SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true,
    hideOnClick: false
  };

  @ViewChild(SwiperComponent, { static: false }) componentRef?: SwiperComponent;
  @ViewChild(SwiperDirective, { static: false }) directiveRef?: SwiperDirective;

  
  public toggleType(): void {
    this.type = (this.type === 'component') ? 'directive' : 'component';
  }

  public toggleDisabled(): void {
    this.disabled = !this.disabled;
  }

  public toggleDirection(): void {
    this.config.direction = (this.config.direction === 'horizontal') ? 'vertical' : 'horizontal';
  }

  public toggleSlidesPerView(): void {
    if (this.config.slidesPerView !== 1) {
      this.config.slidesPerView = 1;
    } else {
      this.config.slidesPerView = 2;
    }
  }

  public toggleOverlayControls(): void {
    if (this.config.navigation) {
      this.config.scrollbar = false;
      this.config.navigation = false;

      this.config.pagination = this.pagination;
    } else if (this.config.pagination) {
      this.config.navigation = false;
      this.config.pagination = false;

      this.config.scrollbar = this.scrollbar;
    } else {
      this.config.scrollbar = false;
      this.config.pagination = false;

      this.config.navigation = true;
    }

    if (this.type === 'directive' && this.directiveRef) {
      this.directiveRef.setIndex(0);
    } else if (this.type === 'component' && this.componentRef && this.componentRef.directiveRef) {
      this.componentRef.directiveRef.setIndex(0);
    }
  }

  public toggleKeyboardControl(): void {
    this.config.keyboard = !this.config.keyboard;
  }

  public toggleMouseWheelControl(): void {
    this.config.mousewheel = !this.config.mousewheel;
  }

  public onIndexChange(index: number): void {
    console.log('Swiper index: ', index);
  }

  public onSwiperEvent(event: string): void {
    console.log('Swiper event: ', event);
  }

}
