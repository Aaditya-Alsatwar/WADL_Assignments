import { Component } from '@angular/core';
@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent {
title = 'AngProj1';
displayedValue:any;

getValues(val:any)
{
this.displayedValue=val;
}

getObjectKeys(obj:any): string[] {
  return Object.keys(obj);
}
}