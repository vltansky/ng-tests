import { Component, OnInit } from '@angular/core';
import cssVars from 'css-vars-ponyfill';
import _links from './nav.config.json';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'resources';
  banking_site = 'igud';
  links = _links;
test(e){
  // e.preventDefaultdfgdc ();
  console.log('teeest');
}

  loadStyle(key){
    if (!document.getElementById(key)){
        const head  = document.getElementsByTagName('head')[0];
        const link  = document.createElement('link');
        link.id   = key;
        link.rel  = 'stylesheet';
        link.type = 'text/css';
        link.href = `assets/themes/${key}_vars.css`;
        head.appendChild(link);
    }
  }

  changeBS(){
    var element = document.getElementById(this.banking_site);
    element.parentNode.removeChild(element);
    this.banking_site = 'private';
    this.loadStyle('private')
  }
  ngOnInit(){
    console.log('dsa');
    if(this.banking_site == 'igud'){
      this.loadStyle('igud');
    }
    
    
  cssVars({
    // Targets
    rootElement   : document,
    shadowDOM     : false,
    // Sources
    include       : 'link[rel=stylesheet],style',
    // Options
    onlyLegacy    : true,
    preserveStatic: true,
    preserveVars  : false,
    silent        : false,
    updateDOM     : true,
    updateURLs    : true,
    watch         : true,
  });
  }
}
