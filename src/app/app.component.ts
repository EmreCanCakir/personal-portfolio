import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'personal-portfolio';
  circles = [
    { color: '#123456', size: 100, top: Math.random() * 100, left: Math.random() * 100 },
    { color: '#789012', size: 150, top: Math.random() * 100, left: Math.random() * 100 },
    { color: '#345678', size: 75, top: Math.random() * 100, left: Math.random() * 100 }
  ];
}
