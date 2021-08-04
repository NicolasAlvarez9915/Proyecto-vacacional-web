import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UsuarioRespuesta} from "../../data/schema/usuarios/usuario/usuario-respuesta";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UsuarioEnvio} from "../../data/schema/usuarios/usuario/usuario-envio";
import {map} from "rxjs/operators";
import {Respuesta} from "../../data/schema/base-respuesta/respuesta";

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private currentUserSubject: BehaviorSubject<UsuarioRespuesta>;
  public currentUser: Observable<UsuarioRespuesta>;
  baseUrl: string;

  constructor(
    private http: HttpClient,
  ) {
    this.currentUserSubject = new BehaviorSubject<UsuarioRespuesta>(JSON.parse(localStorage.getItem('currentUser')));
    this.currentUser = this.currentUserSubject.asObservable();
    this.baseUrl = environment.baseUrl;
  }

  public get currentUserValue(): UsuarioRespuesta {
    return this.currentUserSubject.value;
  }

  public currentUserValueSet(user: Respuesta<UsuarioRespuesta>){
    localStorage.setItem('currentUser', JSON.stringify(user.object));
    this.currentUserSubject.next(user.object);
  }

  login(usuario: UsuarioEnvio) {
    return this.http.post<Respuesta<UsuarioRespuesta>>(`${this.baseUrl}api/Usuario/InicioSesion`, usuario)
      .pipe(map(user => {
          if (!user.error) {
            this.currentUserValueSet(user);
          }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
