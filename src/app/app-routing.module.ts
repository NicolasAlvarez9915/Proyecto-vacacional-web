import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {InicioSessionComponent} from './modules/Login/inicio-session/inicio-session.component';

const routes: Routes = [
  { path: 'Login', component: InicioSessionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
