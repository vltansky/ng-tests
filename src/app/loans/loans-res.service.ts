import { Injectable } from '@angular/core';
import _data from 'app/assets/res.json';

@Injectable({
  providedIn: 'root'
})
export class LoansResService {

  constructor() { }
  
  getValue(key){
    console.log('getting val');
    return _data[key];
  }
}
