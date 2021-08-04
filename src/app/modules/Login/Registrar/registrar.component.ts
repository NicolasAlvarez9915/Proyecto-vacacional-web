import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {

  mostrar: string;
  constructor(
    private router: Router) { }

  ngOnInit(): void {
    this.mostrar = 'profesional';
  }

  dirigirLogin(){
    this.router.navigate(['/Login']);
  }
}
