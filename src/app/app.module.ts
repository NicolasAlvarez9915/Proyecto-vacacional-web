import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {PerfilComponent} from './modules/Empresa/perfil/perfil.component';
import {RegistrarComponent} from './modules/Login/registrar/registrar.component';
import {InicioSessionComponent} from './modules/Login/inicio-session/inicio-session.component';
import {NavComponent} from './layout/nav/nav.component';
import {FooterComponent} from "./layout/footer/footer.component";
import {JwtInterceptor} from "./core/interceptor/jwt.interceptor";
import {HTTP_INTERCEPTORS, HttpClient, HttpClientModule} from "@angular/common/http";
import {FormsModule} from "@angular/forms";

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
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [{ provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
