/* src/app/navbar/navbar.component.ts */
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {
  items = [
    { label: 'Sobre Mi', icon: 'pi pi-user', command: () => this.scrollTo('hero') },
    { label: 'Proyectos', icon: 'pi pi-briefcase', command: () => this.scrollTo('proyectos') },
    { label: 'Tecnologías', icon: 'pi pi-cog', command: () => this.scrollTo('tecnologias') }
  ];

  scrollTo(id: string) {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
