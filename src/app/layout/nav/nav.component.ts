import { Component, OnInit } from '@angular/core';
import {UsuarioRespuesta} from "../../data/schema/usuarios/usuario/usuario-respuesta";
import {AuthenticationService} from "../../core/service/authentication.service";

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {

  currentUser:UsuarioRespuesta;

  constructor(
    private  authenticationService:AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x=>this.currentUser=x);
  }

  ngOnInit(): void {

  }

}
