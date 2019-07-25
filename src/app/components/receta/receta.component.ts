import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { RecetasService } from '../../servicios/recetas.service';

@Component({
  selector: 'app-receta',
  templateUrl: './receta.component.html',
})
export class RecetaComponent implements OnInit {

	receta:any = {};

  constructor(private activatedRoute:ActivatedRoute,
  	private _recetaService:RecetasService) { 
  	this.activatedRoute.params.subscribe(params=>{
  		this.receta = this._recetaService.getReceta(params["id"]);
  		console.log(this.receta);
  	})
  }

  ngOnInit() {
  }

}
