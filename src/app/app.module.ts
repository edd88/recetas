import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {APP_ROUTING} from './app.routes';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { RecetarioComponent } from './components/recetario/recetario.component';

import { RecetasService } from './servicios/recetas.service';
import { RecetaComponent } from './components/receta/receta.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    RecetarioComponent,
    RecetaComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTING
  ],
  providers: [
    RecetasService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
