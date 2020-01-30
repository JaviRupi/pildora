import { Component, OnInit } from '@angular/core';
import { Etiquetas } from 'src/app/Models/Etiquetas';
import { PruebaService } from '../../prueba.service';
import { HttpClient } from '@angular/common/http';

@Component({

  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  etiqueta: Etiquetas;
  etiquetas: Etiquetas[];
  constructor( private pruebaservice: PruebaService, private http: HttpClient) {
  }

  filterPost = '';



  /*
    etiquetas = [
      {
        id : 1,
        nombre: ' <a> ',
        des: 'Texto de ejemplo',
        ejemplo: '<p>Mi gato es <a href="">muy</a> gruñon.</p>'

      },

      {
        id : 2,
        nombre: ' <br> ',
        des: 'Texto de ejemplo',
        ejemplo: '<p>Mi perro la chupa <a href="">muy</a> gruñon.</p>'
      },

      {
        id : 3,
        nombre: ' <li> ',
        des: 'Texto de ejemplo'
      },

    ];
*/
  ngOnInit() {
  }




}
