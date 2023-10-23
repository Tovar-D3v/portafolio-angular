import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomepageService {
  private initialcount: number = 304959;     //we can get this data from database.
  private likesCount: number = this.initialcount;
  private buttonOn: boolean =false;

  constructor() {}

  likescounter(){
    if(this.likesCount === this.initialcount)
    {
      this.likesCount++;
      this.buttonOn = true;
    }else{
      this.likesCount--;
      this.buttonOn = false;
    }
  }

  getLikesCount(){
    return this.likesCount;
  }

  getButtonStatus(){
    return this.buttonOn;
  }
}
