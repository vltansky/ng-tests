import { Injectable } from '@angular/core';

@Injectable({
    providedIn: "root"
})
export class LoggerService {
    debug(message){
        console.warn(message);
    }
}