import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {UsuarioRespuesta} from "../../data/schema/usuarios/usuario/usuario-respuesta";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../environments/environment";
import {UsuarioEnvio} from "../../data/schema/usuarios/usuario/usuario-envio";
import {map} from "rxjs/operators";

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

  login(usuario: UsuarioEnvio) {
    return this.http.post<any>(`${this.baseUrl}api/Usuario/InicioSesion`, usuario)
      .pipe(map(user => {
        debugger
        if (!user.error) {
          localStorage.setItem('currentUser', JSON.stringify(user.object));
          this.currentUserSubject.next(user);
        }
        return user;
      }));
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.currentUserSubject.next(null);
  }
}
