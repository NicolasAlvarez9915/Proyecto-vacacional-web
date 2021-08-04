import { Component, OnInit } from '@angular/core';
import {UsuarioEnvio} from "../../../data/schema/usuarios/usuario/usuario-envio";
import {AuthenticationService} from "../../../core/service/authentication.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-inicio-session',
  templateUrl: './inicio-session.component.html',
  styleUrls: ['./inicio-session.component.css']
})
export class InicioSessionComponent implements OnInit {

  usuario: UsuarioEnvio;
  constructor(private Aute: AuthenticationService,
              private router: Router) { }

  ngOnInit(): void {
    this.usuario = new UsuarioEnvio();
  }
  InicioSession() {
    this.Aute.login(this.usuario).subscribe(
      response => {
        if(response.error)
        {
          alert(response.mensaje);
        }else{
          debugger
          const ruta = (response.object.rol == "Profesional" ) ? '/PerfilProfesional' : '/PerfilEmpresa';
          this.router.navigate([ruta]);
        }
      }
    );
  }

  dirigirRegistrarse(){
    this.router.navigate(['/Registro']);
  }

}
