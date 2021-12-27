import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { UsuarioService } from '../Services/usuario.service';
import { Usuarios } from '../Models/Usuarios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  public usuarios: Usuarios;

  constructor(

    private _usuarioService: UsuarioService

  ) { 

    this.usuarios = new Usuarios('', '');

   }

  ngOnInit(): void {

  }

  auth() {
    this._usuarioService.auth(this.usuarios).subscribe(
      response => {

        return console.log(response.data);

      },
      error => {
        return console.log(error);
      }

    );
  }



}
