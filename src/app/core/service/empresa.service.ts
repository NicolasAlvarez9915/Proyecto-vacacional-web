import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {Profesional} from "../../data/schema/computrabajo/profesional/profesional";
import {Observable} from "rxjs";
import {Respuesta} from "../../data/schema/base-respuesta/respuesta";
import {map} from "rxjs/operators";
import {Empresa} from "../../data/schema/computrabajo/empresa/empresa";

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  baseUrl: string;
  constructor(
    private http: HttpClient,
  ){
    this.baseUrl = environment.baseUrl;
  }

  Registrar(empresa: Empresa): Observable<Respuesta<Empresa>>
  {
    return this.http.post<Respuesta<Empresa>>(`${this.baseUrl}api/Empresa`,empresa)
      .pipe(map(response => {
        return response;
      }));;
  }
}