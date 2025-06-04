import { Component, OnInit } from '@angular/core';

interface Tecnologia {
  nombre: string;
  imagen?: string;
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
      { nombre: 'Java Spring Boot', imagen: 'https://img.icons8.com/color/200/spring-logo.png' },
      { nombre: 'Django Rest Framework', imagen: 'https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png' },
      { nombre: 'Django', imagen: 'https://e7.pngegg.com/pngimages/10/113/png-clipart-django-web-development-web-framework-python-software-framework-django-text-trademark-thumbnail.png' },
      { nombre: 'React', imagen: 'https://www.cdnlogo.com/logos/r/85/react.svg' },
      { nombre: 'React Native', imagen: 'https://www.cdnlogo.com/logos/r/85/react.svg' },
      { nombre: 'MySQL', imagen: 'https://cdn-icons-png.flaticon.com/512/919/919836.png' },
      { nombre: 'PostgreSQL', imagen: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/29/Postgresql_elephant.svg/993px-Postgresql_elephant.svg.png' },
      { nombre: 'Docker', imagen: 'https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/97_Docker_logo_logos-512.png' },
      { nombre: 'Git', imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSycA_u6TeGB6ZbgCERHMyCHOlvA0z3JtmD1A&s' },
      { nombre: 'AWS', imagen: 'https://brandlogos.net/wp-content/uploads/2021/11/amazon_web_services-logo.png' }
    ];
  }
}
