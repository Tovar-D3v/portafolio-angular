import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Digital Portfolio';

  items = [
    { label: 'Sobre mí', icon: 'pi pi-user', routerLink: '/about' },
    { label: 'Proyectos', icon: 'pi pi-briefcase', routerLink: '/projects' },
    { label: 'Habilidades', icon: 'pi pi-cog', routerLink: '/skills' },
    { label: 'Experiencia', icon: 'pi pi-book', routerLink: '/experience' },
    { label: 'Contacto', icon: 'pi pi-envelope', routerLink: '/contact' },
  ];
}
