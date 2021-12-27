import { Component, OnInit } from '@angular/core';

import { UsuarioService } from '../Services/usuario.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [UsuarioService]
})
export class LoginComponent implements OnInit {

  constructor(
    
    private _usuarioService: UsuarioService
    
  ) { }

  ngOnInit(): void {

  }



}
