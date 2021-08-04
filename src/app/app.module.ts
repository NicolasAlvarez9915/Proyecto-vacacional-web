import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PerfilComponent} from './modules/Empresa/perfil/perfil.component';
import {RegistrarComponent} from './modules/Login/registrar/registrar.component';
import {InicioSessionComponent} from './modules/Login/inicio-session/inicio-session.component';
import {NavComponent} from './layout/nav/nav.component';
import {FooterComponent} from "./layout/footer/footer.component";

@NgModule({
  declarations: [
    AppComponent,
    PerfilComponent,
    RegistrarComponent,
    InicioSessionComponent,
    NavComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
