import { Injectable } from '@angular/core';
const _data = {test:'vlad'};
@Injectable({
  providedIn: 'root'
})
export class CreditCardsService {

  constructor() { }

  getValue(key){
    console.log('getting val');
    return _data[key];
  }
}
