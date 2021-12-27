import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";
import { Global } from "./global";
import { Usuarios } from "../Models/Usuarios";

@Injectable()
export class UsuarioService {

    public url: string;

    constructor(
        private _http: HttpClient,
        public HttpClient: HttpClient,
    ) {
        this.url = Global.url;
    }

    auth(model: Usuarios): Observable<any> {
        let params = JSON.stringify(Usuarios);
        let headers = new HttpHeaders().set('Content-type', 'application/json');
        return this._http.post(this.url + 'mis-vuelos', params, { headers: headers });

    }


}