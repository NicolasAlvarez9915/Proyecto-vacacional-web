import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioSessionComponent} from './modules/Login/inicio-session/inicio-session.component';
import {AuthGuard} from "./core/guard/auth.guard";
import {RegistrarComponent} from "./modules/Login/Registrar/registrar.component";
import {PerfilComponent} from "./modules/Empresa/Perfil/perfil.component";

const routes: Routes = [
  { path: 'Login', component: InicioSessionComponent},
  {path: 'Registro', component: RegistrarComponent},
  {path: 'PerfilEmpresa', component: PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
