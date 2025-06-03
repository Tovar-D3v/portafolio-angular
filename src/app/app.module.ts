/* src/app/app.module.ts */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

/* Importar CarouselModule de PrimeNG */
import { CarouselModule } from 'primeng/carousel';

/* --- COMPONENTES “CLÁSICOS” (no standalone) --- */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { FooterComponent } from './shared/footer/footer.component';

/* --- MÓDULOS DE PrimeNG QUE NECESITAS PARA <p-toolbar>, <p-chip>, ETC. --- */
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';

const routes: Routes = [
  { path: '', component: HeroComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'tecnologias', component: TecnologiasComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeroComponent,
    ProyectosComponent,
    TecnologiasComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,

    /* Registrar rutas directamente en AppModule */
    RouterModule.forRoot(routes),

    /* CarouselModule agregado aquí */
    CarouselModule,

    /* Módulos de PrimeNG */
    MenubarModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    PanelModule,
    DividerModule,
    ChipModule,
    BadgeModule,
    TooltipModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
