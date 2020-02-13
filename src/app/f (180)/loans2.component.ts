import { Component, OnInit, ChangeDetectionStrategy, Input, Renderer2 } from '@angular/core';
const _data ={test:'vlad'};// import _data from './res.json';

@Component({
  selector: 'app-loans2',
  templateUrl: './loans2.component.html',
  styleUrls: ['./loans2.component.scss'],
})
export class Loans2Component implements OnInit {

  @Input() config;
  constructor(private renderer: Renderer2) {
  }

  ngOnInit() {
  }

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

}
