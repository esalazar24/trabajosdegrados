import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


import { RegistroAnteproyectoComponent } from '../../registro-anteproyecto/registro-anteproyecto.component';
import { PartesAnteproyectoComponent } from '../../partes-anteproyecto/partes-anteproyecto.component';
import { RegistroItemsComponent } from '../../registro-items/registro-items.component';
import { ConsultaSugerenciasComponent } from '../../consulta-sugerencias/consulta-sugerencias.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  
  { path: 'registro-anteproyecto', component: RegistroAnteproyectoComponent },
  { path: 'partes-anteproyecto', component: PartesAnteproyectoComponent },
  { path: 'registro-items', component: RegistroItemsComponent },
  { path: 'consulta-sugerencias', component: ConsultaSugerenciasComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
