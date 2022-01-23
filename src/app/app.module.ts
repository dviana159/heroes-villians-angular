import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

/* Routes */
import { APP_ROUTING } from './app.routes';
/* Services */
import { HeroesService } from './services/heroes.service';
import { VillainsService } from './services/villains.service';
/* Components */
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroeTarjetaComponent } from './components/heroe-tarjeta/heroe-tarjeta.component';
import { HeroeComponent } from './components/heroe/heroe.component';
import { BuscadorComponent } from './components/buscador/buscador.component';
import { VillainsTarjetaComponent } from './components/villains-tarjeta/villains-tarjeta.component';
import { VillainsComponent } from './components/villains/villains.component';
import { VillainComponent } from './components/villain/villain.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    AboutComponent,
    HeroesComponent,
    HeroeTarjetaComponent,
    HeroeComponent,
    BuscadorComponent,
    VillainsTarjetaComponent,
    VillainsComponent,
    VillainComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    HeroesService,
    VillainsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
