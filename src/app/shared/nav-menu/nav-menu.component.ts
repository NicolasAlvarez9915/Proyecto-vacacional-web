import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { AuthenticationService } from 'src/app/core/service/authentication.service';
import {UsuarioRespuesta} from '../../data/schema/usuarios/usuario/usuario-respuesta';

@Component({
  selector: 'app-nav-menu',
  templateUrl: './nav-menu.component.html',
  styleUrls: ['./nav-menu.component.css']
})
export class NavMenuComponent implements OnInit {

  currentUser: UsuarioRespuesta;

  constructor(private router: Router, private servicioAutenticacion: AuthenticationService) {
    this.servicioAutenticacion.currentUser.subscribe(x => this.currentUser = x);
  }

  ngOnInit(): void {
  }

}
