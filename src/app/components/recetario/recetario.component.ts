import { Component, OnInit } from '@angular/core';
import { RecetasService,Receta } from '../../servicios/recetas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recetario',
  templateUrl: './recetario.component.html',
  styles: []
})
export class RecetarioComponent implements OnInit {

	recetas:Receta[] = [];

  constructor(private _recetasService:RecetasService,
  	private router:Router) { }

  ngOnInit() {
  	this.recetas = this._recetasService.getRecetas();
  }

	verReceta(idx:number){
		this.router.navigate(['receta',idx]);
	}

}
