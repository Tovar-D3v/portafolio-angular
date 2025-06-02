/* src/app/proyectos/proyectos.component.ts */
import { Component, OnInit } from '@angular/core';

interface Proyecto {
  titulo: string;
  descripcion: string;
  imagen: string;
  enlace?: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss']
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];

  ngOnInit(): void {
    // Aquí puedes definir tus proyectos reales con rutas de imagen en assets/
    this.proyectos = [
      {
        titulo: 'Proyecto CRM Empresarial',
        descripcion: 'Sistema completo de gestión de relaciones con clientes (CRM) con funcionalidades de cotizaciones, facturación y reportes.',
        imagen: 'assets/proyecto-crm.png',
        enlace: '#'
      },
      {
        titulo: 'Dashboard de Inventarios',
        descripcion: 'Aplicación para control y seguimiento de inventarios con gráficas en tiempo real y alertas de stock mínimo.',
        imagen: 'assets/proyecto-inventario.png',
        enlace: '#'
      },
      {
        titulo: 'Microservicios Reactivos',
        descripcion: 'Conjunto de microservicios basados en Spring WebFlux para procesamiento asíncrono y reactivo de órdenes.',
        imagen: 'assets/proyecto-reactivo.png',
        enlace: '#'
      }
      // Agrega más proyectos si los tienes
    ];
  }
}
