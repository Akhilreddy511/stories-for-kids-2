import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 
      'Cat and Cow', url: '/folder/Cat and Cow', icon: 'mail' },
    { title: 'Ginger the Brave: The Story of a Loyal Dog and a Lucky Boy', url: '/folder/Ginger the Brave: The Story of a Loyal Dog and a Lucky Boy', icon: 'paper-plane' },
  ];
  public itemss = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];
  constructor() {}
}
