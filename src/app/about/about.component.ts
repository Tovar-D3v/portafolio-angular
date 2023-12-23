import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  title: string = '';

  popUp(){     // log message from like-component
    console.log("Popup is working")
  }
}