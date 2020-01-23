import { Component, OnInit } from '@angular/core';
import { etiquetas } from 'src/app/Models/Etiquetas';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  etiquetas: etiquetas[];
  constructor() {}

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
