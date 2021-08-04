export class Usuario {

  id: number;
  idPersona: number;
  estado: number;
  userName: string;
  password: string;
  correo: string;
  rol: string;

  constructor(idPersona: number, estado: number, userName: string, password: string, correo: string, rol: string) {
    this.idPersona = idPersona;
    this.estado = estado;
    this.userName = userName;
    this.password = password;
    this.correo = correo;
    this.rol = rol;
  }


}
