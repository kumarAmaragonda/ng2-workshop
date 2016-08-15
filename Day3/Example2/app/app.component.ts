import { Component } from '@angular/core'

@Component({
    selector: 'first-app',
    template: `
    <h1>{{appTitle}}</h1>
    <h2>{{name}}</h2>
    <label>Image Url: </label>
    <input type="text" [(ngModel)]="imageUrl" #txtInput/>
    <br/>
    <br/>
    <img [src]="txtInput.value" width="400" height="300" />
    <br/>
    <br/>
    <button (click)="changeImageUrl(txtInput)">ClickMe!</button>
    
    {{txtInput.value}}
    `
})
export class AppComponent {
    appTitle: string = 'My App2'
    name: string = 'HelloWorld Angular 2';
    imageUrl: string = '/img/image1.jpg';

    changeImageUrl(input) {
        console.log(input.value);
    }
}