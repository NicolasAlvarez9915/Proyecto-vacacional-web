import { Component, OnInit } from '@angular/core';
import {Empresa} from "../../../data/schema/computrabajo/empresa/empresa";
import {UsuarioRespuesta} from "../../../data/schema/usuarios/usuario/usuario-respuesta";
import {AuthenticationService} from "../../../core/service/authentication.service";
import {EmpresaService} from "../../../core/service/empresa.service";
import {Oferta} from "../../../data/schema/computrabajo/Oferta/oferta";

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  currentUser: UsuarioRespuesta;
  empresa: Empresa;

  oferta: Oferta;

  mostrar: string;
  constructor(
    private  authenticationService:AuthenticationService,
    private empresaServicde: EmpresaService) {
    this.mostrar = 'Principal'
    this.oferta = new Oferta("00","","");
  }

  ngOnInit(): void {
    this.authenticationService.currentUser.subscribe(x=>this.currentUser=x);
    this.consultarEmpresa();
  }

  consultarEmpresa(){
    this.empresaServicde.Empresa(this.currentUser.idPersona).subscribe(
      respueta =>{
        if(!respueta.error){
          this.empresa = respueta.object;
        }
      }
    )
  }

  RegistrarOferta(){
    this.oferta.idEmpresa = this.empresa.id;
    this.empresaServicde.registraOferta(this.oferta).subscribe(
      response =>{
        if(response.error)
        {
          alert(response.mensaje);

        }else{
          alert('Oferta registrada');
        }
      }
    )
  }

}
