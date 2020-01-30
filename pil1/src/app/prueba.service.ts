import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Etiquetas } from 'src/app/Models/Etiquetas';

@Injectable({
  providedIn: 'root'
})
export class PruebaService {


  etiquetasdata: Etiquetas[];

  constructor(private http: HttpClient) {
    4
    this.etiquetasdata = new Array();
    this.cargarEtiquetas();
  }

cargarEtiquetas() {
  const url = 'http://localhost:8080/etiquetas.php';
  const body = {};

  const postObserver = {
    next: value => {
      value.forEach(element => {
        const eti = new Etiquetas();
        eti.id = Number.parseInt(element.id.toString());
        eti.nombre = element.nombre;
        eti.desc = element.desc;
        eti.ejemplo = element.ejemplo;
        this.etiquetasdata.push(eti);
      });
      console.log(this.etiquetasdata);
    },
    error: err => {
      console.log(err);
    }
  };

  this.http.post(url, body).subscribe(postObserver);

}

}
