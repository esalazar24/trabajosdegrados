import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegistroAnteproyectoComponent } from './registro-anteproyecto/registro-anteproyecto.component';
import { PartesAnteproyectoComponent } from './partes-anteproyecto/partes-anteproyecto.component';
import { RegistroItemsComponent } from './registro-items/registro-items.component';
import { ConsultaSugerenciasComponent } from './consulta-sugerencias/consulta-sugerencias.component';
import { LoginService } from './services/login.services';
import { Routes } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistroAnteproyectoComponent,
    PartesAnteproyectoComponent,
    RegistroItemsComponent,
    ConsultaSugerenciasComponent,
    FooterComponent,
    NavbarComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [LoginService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
