import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Router } from '@angular/router';

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
          { label: 'Home', icon: 'pi pi-fw pi-home', url: ""},
          { label: 'About', icon: 'pi pi-fw pi-calendar', url: "http://www.primefaces.org/primeng"},
          { label: 'Experience', icon: 'pi pi-fw pi-pencil', url: "http://www.primefaces.org/primeng" },
          { label: 'Calculator', icon: 'pi pi-fw pi-file', url: "http://www.primefaces.org/primeng" },
          { label: 'Settings', icon: 'pi pi-fw pi-cog' }
      ];

      this.activeItem = this.items[0];
  }

  constructor(private router: Router) { }

  onLoginClick() {
    this.router.navigate(['/login']);
  }
}