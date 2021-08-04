import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UsuarioEnvio} from "../../data/schema/usuarios/usuario/usuario-envio";
import {Observable} from "rxjs";
import {Respuesta} from "../../data/schema/base-respuesta/respuesta";
import {UsuarioRespuesta} from "../../data/schema/usuarios/usuario/usuario-respuesta";
import {map} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
  ){
    this.baseUrl = environment.baseUrl;
  }

  Registrar(usuario: UsuarioEnvio): Observable<Respuesta<UsuarioRespuesta>>
  {
    return this.http.post<Respuesta<UsuarioRespuesta>>(`${this.baseUrl}api/Usuario`,usuario)
      .pipe(map(response => {
        return response;
      }));;
  }
}
