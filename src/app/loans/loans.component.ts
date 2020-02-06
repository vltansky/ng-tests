import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { LoansResService } from './loans-res.service';

@Component({
  selector: 'app-loans',
  templateUrl: './loans.component.html',
  styleUrls: ['./loans.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoansComponent implements OnInit {

  constructor(private res: LoansResService) { }

  ngOnInit() {
  }

  test(){
    console.log('test');
  }

  getValue(key){
    console.log('comp get');
    return this.res.getValue(key);
  }

}
