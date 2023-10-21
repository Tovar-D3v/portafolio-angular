import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {
  initialcount: number = 304958;     //we can get this data from database.
  likesCount: number = this.initialcount;
  buttonOn: boolean = false;

  counter(){
    if(this.likesCount === this.initialcount)
    {
      this.buttonOn = true;
      this.likesCount++
    }else{
      this.buttonOn = false;
      this.likesCount--
    }
  }
}
