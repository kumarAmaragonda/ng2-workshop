import { Component } from '@angular/core'

@Component({
    selector: 'first-app',
    templateUrl: '/app/app.component.html'
})
export class AppComponent {

    appTitle: string = 'My App1'
    name: string = 'HelloWorld Angular 2';
    imageUrl: string = '/img/image1.jpg';

    changeImageUrl() {
        this.imageUrl = '/img/image2.jpg';
    }
}