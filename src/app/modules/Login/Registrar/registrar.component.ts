import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Profesional} from "../../../data/schema/computrabajo/profesional/profesional";
import {Usuario} from "../../../data/schema/usuarios/usuario/usuario";
import {ProfesionalService} from "../../../core/service/profesional.service";
import {UsuarioService} from "../../../core/service/usuario.service";
import {Empresa} from "../../../data/schema/computrabajo/empresa/empresa";
import {Funcionario} from "../../../data/schema/computrabajo/funcionario/funcionario";
import {EmpresaService} from "../../../core/service/empresa.service";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {


  profesional: Profesional;
  usuario: Usuario;
  passwordConfirmacion: string;

  mostrar: string;

  empresa: Empresa;
  funcionario: Funcionario;


  constructor(
    private router: Router,
    private profesionalService: ProfesionalService,
    private usuarioService: UsuarioService,
    private empresaService: EmpresaService) { }

  ngOnInit(): void {
    this.mostrar = 'profesional';
    this.profesional = new Profesional();
    this.passwordConfirmacion = "";
    this.usuario = new Usuario(0,1,"","","","Profesional");
    this.funcionario = new Funcionario();
    this.empresa = new Empresa("","","","",this.funcionario);
  }

  dirigirLogin(){
    this.router.navigate(['/Login']);
  }

  validarRegistrarProfesional(){
    if(this.passwordConfirmacion != this.usuario.password)
    {
      alert("Las contraseñas deben ser iguales");
    }else {
      this.profesionalService.Registrar(this.profesional).subscribe(
        respuestaProfesional =>{
          if(respuestaProfesional.error){
            alert(respuestaProfesional.mensaje);
          }else{
            this.usuario.idPersona = respuestaProfesional.object.id;
            this.usuario.userName = this.usuario.correo;
            this.usuarioService.Registrar(this.usuario).subscribe(
              respuesta =>{
                if(respuesta.error){
                  alert(respuesta.mensaje);
                }else {
                  //redirigir al perfil del usuario.
                  alert("Usuario Registrado");
                }
              }
            )
          }
        }
      )
    }
  }

  validarRegistrarFuncionario(){
    if(this.passwordConfirmacion != this.usuario.password)
    {
      alert("Las contraseñas deben ser iguales");
    }else {
      this.empresaService.Registrar(this.empresa).subscribe(
        respuestaEmpresa =>{
          if(respuestaEmpresa.error){
            alert(respuestaEmpresa.mensaje);
          }else{
            this.usuario.idPersona = respuestaEmpresa.object.funcionario.id;
            this.usuario.userName = this.usuario.correo;
            this.usuarioService.Registrar(this.usuario).subscribe(
              respuesta =>{
                if(respuesta.error){
                  alert(respuesta.mensaje);
                }else {
                  //redirigir al perfil del usuario.
                  alert("Usuario Registrado");
                }
              }
            )
          }
        }
      )
    }
  }
}
