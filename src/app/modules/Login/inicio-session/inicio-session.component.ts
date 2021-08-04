import { Component, OnInit } from '@angular/core';
import {UsuarioEnvio} from "../../../data/schema/usuarios/usuario/usuario-envio";
import {AuthenticationService} from "../../../core/service/authentication.service";

@Component({
  selector: 'app-inicio-session',
  templateUrl: './inicio-session.component.html',
  styleUrls: ['./inicio-session.component.css']
})
export class InicioSessionComponent implements OnInit {

  usuario: UsuarioEnvio;
  constructor(private Aute: AuthenticationService) { }

  ngOnInit(): void {
    this.usuario = new UsuarioEnvio();
  }
  InicioSession() {
    debugger
    this.Aute.login(this.usuario).subscribe(
      r => {
        console.log(r);
      }
    );
  }
}
