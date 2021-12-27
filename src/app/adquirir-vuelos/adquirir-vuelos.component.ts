import { Component, OnInit } from '@angular/core';

import { VueloService } from '../Services/vuelo.service';

@Component({
  selector: 'app-adquirir-vuelos',
  templateUrl: './adquirir-vuelos.component.html',
  styleUrls: ['./adquirir-vuelos.component.css'],
  providers: [VueloService]
})
export class AdquirirVuelosComponent implements OnInit {

  constructor(

    private _vueloService: VueloService

  ) { }

  ngOnInit(): void {

    // console.log(this._vueloService.prueba());

  }

}
