import {Persona} from '../persona/persona';
import {Documento} from '../documento/documento';
import {Oferta} from '../Oferta/oferta';

export class Profesional extends Persona{
  documentos : Documento[];
  ofertas : Oferta[];
}
