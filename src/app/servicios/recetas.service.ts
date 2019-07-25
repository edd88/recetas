import { Injectable } from '@angular/core';

@Injectable()
export class RecetasService {
	private recetas:Receta[] = [
		{
			id:1,
			nombre:'Pan Amasado',
			img:'assets/img/pan-amasado.jpg',
			ingredientes:['1kg Harina','40g levadura fresca','O 15g de levadura seca',                   
 						'5g azúcar ','10g sal','400cc aprox agua tibia'],
			preparacion:['hacer volcán con la harina ','agregar en el centro un poco de agua, azúcar y levadura ',
						'reposar por 10 min','alrededor del volcán esparcir la sal',
						'trabajar la masa con el agua','amasar bien, pintar con agua, hornear a 200°c por 30 minutos'],
			fecha_subida:new Date("2019/07/18").toDateString()
		},{
			id:2,
			nombre:'Mantequilla Compuesta',
			img:'assets/img/mantequilla-compuesta.jpeg',
			ingredientes:['250g de mantequilla',
						'100g de jamón brunoise',
						's/n papel metálico',
						'2g de marken y 2g de orégano',
						'2g de pp negra'],
			preparacion:['cremar mantequilla con todos los ingredientes',
						'Hacer un cilindro sobre el papel metalico',
						'sellar',
						'congelar por 30 minutos aproximadamente',
						'sacar el papel',
						'cortar en rodajas'],
			fecha_subida:new Date("2019/07/18").toDateString()
		},{
			id:3,
			nombre:'Pulpa de cerdo escabechada',
			img:'assets/img/pulpa-cerdo-escabechada.jpg',
			ingredientes:['700g pulpa trozos',
						'1 pimentón juliana',
						'1 zanahoria juliana',
						'2 cebollas juliana',
						'4 ajos picados',
						'300cc vino blanco',
						'50cc vinagre blanco',
						's/n laurel, sal, pimienta, agua'],
			preparacion:['Saltear verduras',
						'agregar carne, condimentar',
						'agregar con vino',
						'agregar vinagre',
						'cocer por una hora aprox',
						'reposar por una hora',
						'calentar'],
			fecha_subida:new Date("2019/07/18").toDateString()
		},{
			id:4,
			nombre:'Sopaipillas Sureñas',
			img:'assets/img/sopaipillas-sureñas.jpg',
			ingredientes:['s/n agua tibia',
						's/n aceite para freír',
						'1kg Harina',
						'1 levadura',
						'10g de sal'],
			preparacion:['Hacer un volcán con la harina',
						'En el centro colocar la levadura con un poco de agua tibia',
						'Reposar por 5 minutos',
						'Trabajar Masa agregando agua tibia',
						'Reposar por 30 min',
						'Uslerear y hacer sopaipillas pinchando en el centro',
						'Reposar por 10 min',
						'Freír'],
			fecha_subida:new Date("2019/07/18").toDateString()
		}
	]

	constructor() {
		console.log('El servicio esta listo para usarse');
	}

	getRecetas():Receta[]{
		return this.recetas;
	}

	getReceta(idx:string){
		return this.recetas[idx];
	}

	buscarReceta(termino:string){
		let recetasArr:Receta[] = [];
		termino = termino.toLowerCase();
		for (let i = 0; i < this.recetas.length; i++) {
			let receta = this.recetas[i];
			let nombre = receta.nombre.toLowerCase();
			if (nombre.indexOf(termino)>=0) {
				recetasArr.push(receta);
			}
		}
		return recetasArr;
	}
}

export interface Receta {
	id:number,
	nombre:string,
	img:string,
	ingredientes:string[],
	preparacion:string[]
	fecha_subida:string
}