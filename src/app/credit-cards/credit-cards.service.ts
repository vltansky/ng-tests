import { Injectable } from '@angular/core';
import _data from './res.json';
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
