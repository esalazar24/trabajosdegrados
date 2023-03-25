import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { ConsultaSugerenciasComponent } from './consulta-sugerencias/consulta-sugerencias.component';
import { PartesAnteproyectoComponent } from './partes-anteproyecto/partes-anteproyecto.component';
import { RegistroAnteproyectoComponent } from './registro-anteproyecto/registro-anteproyecto.component';
import { RegistroItemsComponent } from './registro-items/registro-items.component';


@NgModule({
  declarations: [
    AdminComponent,
    ConsultaSugerenciasComponent,
    PartesAnteproyectoComponent,
    RegistroAnteproyectoComponent,
    RegistroItemsComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }
