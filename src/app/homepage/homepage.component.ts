import { HomepageService } from './homepage.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  constructor(private homepageService: HomepageService){}

  counter(){
    this.homepageService.likescounter();
  }

  get likesCount() {
    return this.homepageService.getLikesCount();
  }

  get buttonStatus() {
    return this.homepageService.getButtonStatus();
  }

/*We don't get updated value like this, it will fetch the original values not the updated one.
  likesCount = this.homepageService.getLikesCount; */
}
