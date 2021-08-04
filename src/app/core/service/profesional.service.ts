import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UsuarioEnvio} from "../../data/schema/usuarios/usuario/usuario-envio";
import {Observable} from "rxjs";
import {Respuesta} from "../../data/schema/base-respuesta/respuesta";
import {UsuarioRespuesta} from "../../data/schema/usuarios/usuario/usuario-respuesta";
import {map} from "rxjs/operators";
import {Profesional} from "../../data/schema/computrabajo/profesional/profesional";

@Injectable({
  providedIn: 'root'
})
export class ProfesionalService {

  baseUrl: string;
  constructor(
    private http: HttpClient,
  ){
    this.baseUrl = environment.baseUrl;
  }

  Registrar(profesional: Profesional): Observable<Respuesta<Profesional>>
  {
    return this.http.post<Respuesta<Profesional>>(`${this.baseUrl}api/Profesional`,profesional)
      .pipe(map(response => {
        return response;
      }));;
  }
}
