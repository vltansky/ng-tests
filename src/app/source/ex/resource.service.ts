import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
const _data = {vlad:'vlad'};

@Injectable({
    providedIn: 'root'
})
export class ResourceService {
    getKey(val){
        return _data[val];
    }
    setKey(val){
        return _data[val]+'vlad';
    }
}