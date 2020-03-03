import { Injectable } from '@angular/core';
import { Observable, of, throwError } from 'rxjs';
import { delay, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
// const _data = {vlad:'vladTesting'};

@Injectable()
export class ResourceService {
  constructor(private http: HttpClient){
  }
    data: any;
    get resourcePath(): string{
      return `/assets/${this._fileName}.json`;
    }
    set resourcePath(name:string){
      this._fileName = name;
    }
    private _fileName: string;
    loaded: boolean = false;
    async load(fileName = null){
      console.log('load');
      if(fileName){
        this.resourcePath = fileName;
      }
      if(!this.resourcePath){
        return throwError("No resouce path provided");
      }
      this.data = await this.http.get(this.resourcePath).toPromise();
      console.log(this.data);
      return true;
    }

    getKey(key){
      if(!this.data){
        if(!this.loaded){
          throw new Error("Resource not loaded. Implement init() function before calling getKey()");
        }else{
          throw new Error("Unexpected error. Resource data not loaded");
        }
      }
      const value = this.data[key];
      if(!value){
        console.log(value);
        console.error(`'${key}' not found in ${this._fileName} resource or empty`);
        return '';
      }
      return value;
    }
    setKey(val){
        return this.data[val]+'vlad';
    }
}