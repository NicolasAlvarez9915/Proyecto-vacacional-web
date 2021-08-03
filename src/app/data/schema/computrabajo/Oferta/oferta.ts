import {Profesional} from '../profesional/profesional';
import {Documento} from '../documento/documento';

export class Oferta {
  id : number;
  referencia : string;
  idEmpresa : number;
  descripcion : string;
  postulantes : Profesional[];
  documentos : Documento[];
  estado : string;

  constructor(referencia : string, descripcion : string, estado : string) {
    this.referencia = referencia;
    this.descripcion = descripcion;
    this.estado = estado;
  }

  agregarDocumento(documento: Documento): void {
    this.documentos.push(documento);
  }

  agregarPostulante(profesional: Profesional): void {
    this.postulantes.push(profesional);
  }

}
