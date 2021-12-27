import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { observable } from "rxjs";
import { Usuarios } from "../Models/Usuarios";

@Injectable()
export class UsuarioService {

    constructor(
        private _http: HttpClient,
        public HttpClient: HttpClient,
    ) {

    }

}