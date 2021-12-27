import { Component, OnInit } from '@angular/core';
import { Vuelos } from '../Models/Vuelos';
import { VueloService } from '../Services/vuelo.service';

@Component({
  selector: 'app-mis-vuelos',
  templateUrl: './mis-vuelos.component.html',
  styleUrls: ['./mis-vuelos.component.css'],
  providers: [VueloService]
})
export class MisVuelosComponent implements OnInit {

  public vuelos: Vuelos;

  constructor(

    private _vueloService: VueloService

  ) {
    this.vuelos = new Vuelos();
  }

  ngOnInit(): void {

    // this._vueloService.getVuelos().subscribe(
    //   response => {
    //     console.log(response);
    //   },
    //   error => {
    //     console.log(error);
    //   }
    // );

    // this._vueloService.consultarVuelos()

    this._vueloService.consultarVuelos(this.vuelos).subscribe(
      response => {

        console.log(response.data);

      },
      error => {
        console.log(error);
      }

    );
  }

}
