import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RecetasService,Receta } from '../../servicios/recetas.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
	termino:string;
	recetas:Receta[] = [];

  constructor(private activatedRoute:ActivatedRoute,
  	private _recetaService:RecetasService) { 
  	this.activatedRoute.params.subscribe(params=>{
  		this.termino=params['termino'];
  		this.recetas=this._recetaService.buscarReceta(params['termino']);
  		console.log(this.termino);
  		console.log(this.recetas);
  	});
  }

  ngOnInit() {
  }

}
