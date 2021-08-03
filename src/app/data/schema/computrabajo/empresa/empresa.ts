import {Oferta} from '../Oferta/oferta';
import {Funcionario} from '../funcionario/funcionario';

export class Empresa {

  id : number;
  nit : string;
  nombre : string;
  descripcion : string;
  telefonoContacto : string;
  correoContacto : string;
  ofertas : Oferta[];
  funcionario : Funcionario;

  constructor(nombre : string, descripcion : string, telefonoContacto : string, correoContacto : string, funcionario : Funcionario) {
    this.nombre = nombre;
    this.descripcion = descripcion;
    this.telefonoContacto = telefonoContacto;
    this.correoContacto = correoContacto;
    this.funcionario = funcionario;
  }


  agregarOferta(oferta: Oferta): void {
    this.ofertas.push(oferta);
  }

}
