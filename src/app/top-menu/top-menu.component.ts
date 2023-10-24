import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.css']
})
export class TopMenuComponent implements OnInit {
  items: MenuItem[] | undefined;
  activeItem: MenuItem | undefined;

  ngOnInit() {
      this.items = [
          { label: 'Home', routerLink : '/'},
          { label: 'About', routerLink : "/about"},
          { label: 'LinkedIn', url: "https://www.linkedin.com/in/vishaljece/"},
          { label: 'GitHub', url: "https://github.com/thevishalj"},
          { label: 'Calculator', routerLink : "/calculator"}
      ];
      this.activeItem = this.items[0];
  }
}