/* src/app/app.module.ts */
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

/* PrimeNG Modules */
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { ToolbarModule } from 'primeng/toolbar';
import { MenubarModule } from 'primeng/menubar';
import { PanelModule } from 'primeng/panel';
import { DividerModule } from 'primeng/divider';
import { ChipModule } from 'primeng/chip';
import { BadgeModule } from 'primeng/badge';
import { TooltipModule } from 'primeng/tooltip';

/* Lucide Angular: importar el módulo y los iconos que usarás */
import { LucideAngularModule } from 'lucide-angular';
import {
  Code,
  Smartphone,
  Database,
  Server,
  Github,
  Cloud
} from 'lucide-angular';

/* Componentes de tu aplicación */
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HeroComponent } from './hero/hero.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TecnologiasComponent } from './tecnologias/tecnologias.component';
import { FooterComponent } from './shared/footer/footer.component';

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

    /* Rutas */
    RouterModule.forRoot(routes),

    /* PrimeNG */
    CarouselModule,
    MenubarModule,
    ToolbarModule,
    ButtonModule,
    CardModule,
    PanelModule,
    DividerModule,
    ChipModule,
    BadgeModule,
    TooltipModule,

    /* LucideAngularModule: registramos SOLO los iconos que necesitamos */
    LucideAngularModule.pick({
      Code,
      Smartphone,
      Database,
      Server,
      Github,
      Cloud
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
