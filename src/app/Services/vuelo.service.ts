import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable, observable } from "rxjs";
import { Global } from "./global";
import { Vuelos } from "../Models/Vuelos";

@Injectable()
export class VueloService {

    public url: string;

    constructor(
        private _http: HttpClient,
        public HttpClient: HttpClient,
        // public vuelos: Vuelos
    ) {

        this.url = Global.url;
    }



    consultarVuelos(Model: Vuelos):Observable<any> {

        // let data = new FormData();
        // data.append("id_usuario", model.id_usuario);
        // return this.HttpClient.post(this.url + 'mis-vuelos', data)

        let params =JSON.stringify(Vuelos);
        let headers = new HttpHeaders().set('Content-type', 'application/json');

        return this._http.post(this.url+'mis-vuelos', params, {headers: headers});

    }

}
