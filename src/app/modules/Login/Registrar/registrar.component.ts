import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { Profesional } from "../../../data/schema/computrabajo/profesional/profesional";
import { Usuario } from "../../../data/schema/usuarios/usuario/usuario";
import { ProfesionalService } from "../../../core/service/profesional.service";
import { UsuarioService } from "../../../core/service/usuario.service";
import { Empresa } from "../../../data/schema/computrabajo/empresa/empresa";
import { Funcionario } from "../../../data/schema/computrabajo/funcionario/funcionario";
import { EmpresaService } from "../../../core/service/empresa.service";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})

export class RegistrarComponent implements OnInit {

  aux: number;
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
    this.usuario = new Usuario(0, 1, "", "", "", "Profesional");
    this.funcionario = new Funcionario();
    this.empresa = new Empresa("", "", "", "", this.funcionario);
  }

  dirigirLogin() {
    this.router.navigate(['/Login']);
  }

  validarRegistrarProfesional() {
    if (this.passwordConfirmacion != this.usuario.password) {
      alert("Las contraseñas deben ser iguales");
    } else {
      //Validar los campos del profesional.
      if (this.validacionVacio() != 1) {
        this.profesionalService.Registrar(this.profesional).subscribe(
          respuestaProfesional => {
            if (respuestaProfesional.error) {
              alert(respuestaProfesional.mensaje);
            } else {
              this.usuario.idPersona = respuestaProfesional.object.id;
              this.usuario.userName = this.usuario.correo;

              this.usuarioService.Registrar(this.usuario).subscribe(
                respuesta => {
                  if (respuesta.error) {
                    alert(respuesta.mensaje);
                  } else {
                    //redirigir al perfil del usuario.
                    alert("Usuario Registrado");
                  }
                }
              )

            }
          }
        )
      } else {

        alert("Hay campos vacios");
      }
    }
  }
  validacionVacio() {

    if (this.mostrar == 'Funcionario') {
      if (this.empresa.funcionario.identificacion == "" ||
        this.empresa.funcionario.nombres == "" ||
        this.empresa.funcionario.apellidos == "" ||
        this.empresa.funcionario.telefono == "" ||
        this.usuario.correo == "" ||
        this.usuario.password == "" ||
        this.passwordConfirmacion == "" ||
        this.empresa.nit == "" ||
        this.empresa.nombre == "" ||
        this.empresa.telefonoContacto == "" ||
        this.empresa.correoContacto == "" ||
        this.empresa.descripcion == "") {

        return 1;
      }

    } else if (this.mostrar == 'Profesional') {
      if (this.profesional.identificacion == "" ||
        this.profesional.nombres == "" ||
        this.profesional.apellidos == "" ||
        this.profesional.telefono == "" ||
        this.usuario.correo == "" ||
        this.usuario.password == "" ||
        this.passwordConfirmacion == "") {

        return 1;
      }
    }

    /*
    
    */
    /*
   
    */
  }

  validarRegistrarFuncionario() {
    if (this.passwordConfirmacion != this.usuario.password) {
      alert("Las contraseñas deben ser iguales");
    } else {
      if (this.validacionVacio() != 1) {
        // validar los campos del funcionario y empresa.
        this.empresaService.Registrar(this.empresa).subscribe(
          respuestaEmpresa => {
            if (respuestaEmpresa.error) {
              alert(respuestaEmpresa.mensaje);
            } else {
              this.usuario.idPersona = respuestaEmpresa.object.funcionario.id;
              this.usuario.userName = this.usuario.correo;
              this.usuario.rol = 'Empresa';


              this.usuarioService.Registrar(this.usuario).subscribe(
                respuesta => {
                  if (respuesta.error) {
                    alert(respuesta.mensaje);
                  } else {
                    this.router.navigate(['/PerfilEmpresa']);
                    alert("Usuario Registrado");
                  }
                }
              )

            }
          }
        )
      } else {

        alert("Hay campos vacios");
      }
    }
  }
}
