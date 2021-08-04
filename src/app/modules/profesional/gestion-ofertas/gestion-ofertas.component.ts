import { Component, OnInit } from '@angular/core';
import {EmpresaService} from '../../../core/service/empresa.service';
import {Oferta} from '../../../data/schema/computrabajo/Oferta/oferta';
import {Observable} from 'rxjs';
import {Respuesta} from '../../../data/schema/base-respuesta/respuesta';

@Component({
  selector: 'app-gestion-ofertas',
  templateUrl: './gestion-ofertas.component.html',
  styleUrls: ['./gestion-ofertas.component.css']
})
export class GestionOfertasComponent implements OnInit {

  constructor(private empresaService: EmpresaService) {

  }

  ofertas: Oferta[] = [];

  ngOnInit(): void {
    this.obtenerOfertas();
  }

  obtenerOfertas(): void {
     this.empresaService.obtenerEmpresas().subscribe( respuesta => {
      if(respuesta.error){
        alert(respuesta.mensaje);
        this.ofertas = respuesta.object;
        console.log(this.ofertas);
      }
    });
  }

}
