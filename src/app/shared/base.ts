import { LoggerService } from './logger.service';
import { OnInit, Optional } from '@angular/core';
import { ResourceService } from './resource.service';

export abstract class Base implements OnInit{
    constructor(public logger: LoggerService, public resService: ResourceService = null, public resourceName = null){
    }
    async loadResources(){}
    infraInit(){}
    onInit(){}

    async ngOnInit() {
        if(this.resService){
            await this.resService.load(this.resourceName);
        }
        await this.loadResources();
        this.onInit();
    }
}