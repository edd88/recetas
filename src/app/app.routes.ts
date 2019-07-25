import { RouterModule,Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RecetarioComponent } from './components/recetario/recetario.component';
import { RecetaComponent } from './components/receta/receta.component';
import { SearchComponent } from './components/search/search.component';

export const APP_ROUTES: Routes = [
	{path:'home', component:HomeComponent},
	{path:'recetario', component:RecetarioComponent},
	{path:'receta/:id',component:RecetaComponent},
	{path:'search/:termino',component:SearchComponent},
	{ path:'**', pathMatch:'full',redirectTo:'home'}
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);