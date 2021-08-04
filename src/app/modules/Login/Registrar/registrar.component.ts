import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {Profesional} from "../../../data/schema/computrabajo/profesional/profesional";
import {Usuario} from "../../../data/schema/usuarios/usuario/usuario";
import {ProfesionalService} from "../../../core/service/profesional.service";
import {UsuarioService} from "../../../core/service/usuario.service";

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

  constructor(
    private router: Router,
    private profesionalService: ProfesionalService,
    private usuarioService: UsuarioService) { }

  ngOnInit(): void {
    this.mostrar = 'profesional';
    this.profesional = new Profesional();
    this.passwordConfirmacion = "";
    this.usuario = new Usuario(0,1,"","","","Profesional");
  }

  dirigirLogin(){
    this.router.navigate(['/Login']);
  }

  validarRegistrar(){
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
}
