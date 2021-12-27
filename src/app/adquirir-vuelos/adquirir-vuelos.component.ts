import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Vuelos } from '../Models/Vuelos';

import { VueloService } from '../Services/vuelo.service';

@Component({
  selector: 'app-adquirir-vuelos',
  templateUrl: './adquirir-vuelos.component.html',
  styleUrls: ['./adquirir-vuelos.component.css'],
  providers: [VueloService]
})
export class AdquirirVuelosComponent implements OnInit {

  public vuelos: Vuelos;
  constructor(

    private _vueloService: VueloService

  ) { 
    this.vuelos = new Vuelos('', '', '', '', '');
   }

  ngOnInit(): void {

    // console.log(this._vueloService.prueba());

  }

  adquirirVuelos() {
    this._vueloService.adquiriVuelos(this.vuelos).subscribe(
      response => {

        return console.log(response.data);

      },
      error => {
        return console.log(error);
      }

    );
  }



}
