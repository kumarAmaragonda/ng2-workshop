import { Component } from '@angular/core'

@Component({
    selector: 'first-app',
    template: '<h1> {{name}} </h1>'
})
export class AppComponent {
    name: string = 'HelloWorld Angular 2';
}