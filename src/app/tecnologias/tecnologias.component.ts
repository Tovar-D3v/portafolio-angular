/* src/app/tecnologias/tecnologias.component.ts */
import { Component, OnInit } from '@angular/core';

interface Tecnologia {
  nombre: string;
  icono: string; // clase de PrimeIcons o ruta a imagen
}

@Component({
  selector: 'app-tecnologias',
  templateUrl: './tecnologias.component.html',
  styleUrls: ['./tecnologias.component.scss']
})
export class TecnologiasComponent implements OnInit {
  tecnologias: Tecnologia[] = [];

  ngOnInit(): void {
    this.tecnologias = [
      { nombre: 'Java Spring Boot', icono: 'pi pi-cog' },
      { nombre: 'Django Rest Framework', icono: 'pi pi-cog' },
      { nombre: 'Django', icono: 'pi pi-cog' },
      { nombre: 'React', icono: 'pi pi-react' },
      { nombre: 'React Native', icono: 'pi pi-mobile' },
      { nombre: 'MySQL', icono: 'pi pi-database' },
      { nombre: 'PostgreSQL', icono: 'pi pi-database' },
      { nombre: 'Docker', icono: 'pi pi-windows' },
      { nombre: 'Git', icono: 'pi pi-github' },
      { nombre: 'AWS', icono: 'pi pi-cloud' }
      // Añade o quita tecnologías según prefieras
    ];
  }
}
