import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroAnteproyectoComponent } from './registro-anteproyecto/registro-anteproyecto.component';
import { PartesAnteproyectoComponent } from './partes-anteproyecto/partes-anteproyecto.component';
import { RegistroItemsComponent } from './registro-items/registro-items.component';
import { ConsultaSugerenciasComponent } from './consulta-sugerencias/consulta-sugerencias.component';

const routes: Routes = [
  { path: '', component: LoginComponent },
  { path: 'registro-anteproyecto', component: RegistroAnteproyectoComponent },
  { path: 'partes-anteproyecto', component: PartesAnteproyectoComponent },
  { path: 'registro-items', component: RegistroItemsComponent },
  { path: 'consulta-sugerencias', component: ConsultaSugerenciasComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
