import { Component, OnInit } from '@angular/core';

interface Tecnologia {
  nombre: string;
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
      { nombre: 'Java Spring Boot' },
      { nombre: 'Django Rest Framework' },
      { nombre: 'Django' },
      { nombre: 'React' },
      { nombre: 'React Native' },
      { nombre: 'MySQL' },
      { nombre: 'PostgreSQL' },
      { nombre: 'Docker' },
      { nombre: 'Git' },
      { nombre: 'AWS' }
    ];
  }
}
