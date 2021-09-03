import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { delay, map } from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class GraficasService {

  constructor( private http: HttpClient) { }

  getUsuariosRedesSociales() {
    return this.http.get('http://localhost:3000/grafica')
  }

  getUsers(){
    return this.getUsuariosRedesSociales()
    .pipe(
      delay(1000),
      map( res => {
              const labels = Object.keys ( res )
              const values = Object.values( res )
              return {labels, values}
      })
    )
  }


}
