import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioSessionComponent} from './modules/Login/inicio-session/inicio-session.component';
import {RegistrarComponent} from "./modules/Login/Registrar/registrar.component";
import {AuthGuard} from "./core/guard/auth.guard";

const routes: Routes = [
  { path: 'Login', component: InicioSessionComponent},
  {path: 'Registro', component: RegistrarComponent, canActivate: [AuthGuard]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
