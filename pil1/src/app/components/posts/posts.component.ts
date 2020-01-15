import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {

  constructor() { }
  filterPost = '';

    etiquetas = [
      {
        id : 1,
        nombre: ' <a> ',
        des: 'Texto de ejemplo'
      },

      {
        id : 2,
        nombre: ' <br> ',
        des: 'Texto de ejemplo'
      },

      {
        id : 3,
        nombre: ' <li> ',
        des: 'Texto de ejemplo'
      },

    ];







  ngOnInit() {
  }

}
