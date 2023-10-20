import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  items: MenuItem[] | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Home', routerLink : '/'},
          { label: 'About', routerLink : "/asdlfk"},
          { label: 'Experience', routerLink : "/asdlfk"},
          { label: 'CalculatorApp', routerLink : "/calculator"},
          { label: 'More', routerLink : "/asdfjl" }
      ];
  }
}