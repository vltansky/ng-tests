import { Component, OnInit } from '@angular/core';
import { CreditCardsService } from './credit-cards.service';

@Component({
  selector: 'app-credit-cards',
  templateUrl: './credit-cards.component.html',
  styleUrls: ['./credit-cards.component.scss'],
  providers: [CreditCardsService]
})
export class CreditCardsComponent implements OnInit {

  constructor(private res: CreditCardsService) { }

  ngOnInit() {
  }

  getValue(key){
    this.res.getValue(key);
  }

}
