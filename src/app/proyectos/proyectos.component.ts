/* src/app/proyectos/proyectos.component.ts */
import { Component, OnInit } from '@angular/core';

interface Proyecto {
  titulo: string;
  subtitulo: string;
  descripcion: string;
  imagenes: string[];
  enlace?: string;
}

@Component({
  selector: 'app-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrls: ['./proyectos.component.scss'],
})
export class ProyectosComponent implements OnInit {
  proyectos: Proyecto[] = [];

  ngOnInit(): void {
    this.proyectos = [
      {
        titulo: 'CRM Empresarial',
        subtitulo: 'Gestión integral de clientes y proyectos.',
        descripcion:
          'Chronos es una aplicación diseñada para optimizar la gestión de clientes y proyectos en Indelpa S.A.S., permitiendo un control eficiente de los negocios en distintas etapas. La plataforma facilita la creación, edición y seguimiento de clientes, así como la gestión visual de negocios a través de un sistema de columnas que organiza proyectos en nuevas, propuestas, asignadas, finalizadas o perdidas. Además, incluye un dashboard interactivo que muestra el estado financiero de los proyectos (pendientes, finalizados y no iniciados) y una tabla de seguimiento con fechas de entrega. También permite la gestión de operarios en planta, registrando su desempeño mediante filtros de fecha que calculan porcentaje de productividad y kilos procesados, junto con los días trabajados. Chronos integra herramientas para administrar empresas, asignar clientes, crear sedes y gestionar reuniones y llamadas, proporcionando una solución completa para la gestión empresarial.',
        imagenes: [
          'assets/crm/crm1.png',
          'assets/crm/crm2.png',
          'assets/crm/crm3.png',
        ],
        enlace: '#',
      },
      {
        titulo: 'ChronosQuote',
        subtitulo: 'Sistema inteligente de cotizaciones e inventarios.',
        descripcion:
          'ChronosQuote es una solución desarrollada para optimizar y agilizar el proceso de cotización y gestión de inventarios en Indelpa S.A.S., eliminando la dependencia de hojas de cálculo y mejorando la eficiencia del equipo de ventas. Cuenta con un dashboard dinámico y un tablero Kanban para visualizar y gestionar negocios, permitiendo la generación rápida de cotizaciones y facturas en PDF. Su sistema inteligente de tags evita la duplicación de procesos al autocompletar información de tableros eléctricos previamente cotizados. Además, incorpora WebSockets para sincronizar en tiempo real los cambios en inventarios y negocios, asegurando que cada actualización sea reflejada instantáneamente en las cotizaciones. Con una arquitectura robusta basada en Java Spring Boot, React, RabbitMQ y Docker, ChronosQuote mejora la precisión en la gestión de costos y facilita el trabajo colaborativo entre los cotizadores mediante un sistema adaptable a cada usuario logueado.',
        imagenes: [
          'assets/cotizaciones/cotizaciones1.png',
          'assets/cotizaciones/cotizaciones2.png',
          'assets/cotizaciones/cotizaciones3.png'
        ],
        enlace: '#',
      },
      {
        titulo: 'Chronos',
        subtitulo: 'Gestión y seguimiento del tiempo de trabajo.',
        descripcion:
          'Chronos fue el primer proyecto desarrollado para Indelpa S.A.S., diseñado para medir y gestionar el tiempo de trabajo de los operarios en cada proceso productivo. Su complejidad radica en la estructura de procesos y subprocesos, donde algunas tareas pueden involucrar un solo operador con ayudantes, mientras que otras requieren múltiples operarios trabajando en conjunto. La aplicación permite visualizar en qué etapa se encuentra cada proyecto, generar reprocesos y asignar tareas de manera eficiente. Además, facilita la generación de informes en PDF y Excel, incluyendo fichas técnicas y un consolidado que optimiza la planificación y distribución del trabajo para diseñadores y programadores eléctricos. Desarrollado con Django, ChronosTime proporciona una solución precisa y adaptable para mejorar la gestión del tiempo y la productividad en la empresa.',
        imagenes: [
          'assets/chronos/chronos1.png',
          'assets/chronos/chronos2.png',
          'assets/chronos/chronos3.png'
        ],
        enlace: '#',
      },
      {
        titulo: 'DesliAlert',
        subtitulo: 'Monitoreo inteligente de deslizamientos en Risaralda usando imágenes satelitales.',
        descripcion:
          'DesliAlert es una plataforma web que utiliza inteligencia artificial para detectar zonas de posible deslizamiento en el departamento de Risaralda, Colombia. A partir de imágenes satelitales del programa Copernicus, nuestro sistema analiza de forma automatizada distintos sectores geográficos y señala, mediante cuadrantes visuales en el mapa, las áreas con mayor probabilidad de deslizamientos. Esta herramienta permite a autoridades, comunidades y entes de gestión del riesgo anticiparse a eventos geológicos, mejorar la planificación territorial y tomar decisiones informadas con base en datos satelitales actualizados.',
        imagenes: [
          'assets/deslizamientos/deslizamientos1.png',
          'assets/deslizamientos/deslizamientos2.png',
          'assets/deslizamientos/deslizamientos3.png'
        ],
        enlace: '#',
      },
    ];
  }
}
