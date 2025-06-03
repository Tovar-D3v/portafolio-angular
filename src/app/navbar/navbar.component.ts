import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items = [
    { label: 'Sobre Mi', command: () => this.scrollTo('hero') },
    { label: 'Proyectos', command: () => this.scrollTo('proyectos') },
    { label: 'Tecnologías', command: () => this.scrollTo('tecnologias') },
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}