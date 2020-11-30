import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdmRoutingModule } from './adm-routing.module';
import { SharedModule } from '../shared/shared.module';

import { AdmAcercaDeComponent } from './screens/adm-acerca-de/adm-acerca-de.component';
import { AdmContactosComponent } from './screens/adm-contactos/adm-contactos.component';
import { AdmHabitacionesLibresComponent } from './screens/adm-habitaciones-libres/adm-habitaciones-libres.component';
import { AdmHabitacionesOcupadasComponent } from './screens/adm-habitaciones-ocupadas/adm-habitaciones-ocupadas.component';
import { AdmHomeScreenComponent } from './screens/adm-home-screen/adm-home-screen.component';
import { AdmInfoPacienteComponent } from './screens/adm-info-paciente/adm-info-paciente.component';
import { AdmListaPacienteComponent } from './screens/adm-lista-paciente/adm-lista-paciente.component';
import { AdmPacienteComponent } from './screens/adm-paciente/adm-paciente.component';
import { AdmPaciente2Component } from './screens/adm-paciente2/adm-paciente2.component';
import { AdmComponent } from './adm.component';
import { SidebarAdmComponent } from './components/sidebar-adm/sidebar-adm.component';
import { AdmRegistrarEnferComponent } from './screens/adm-registrar-enfer/adm-registrar-enfer.component';
import { AdmRegistrarMedicComponent } from './screens/adm-registrar-medic/adm-registrar-medic.component';
import { RegistrarEnferComponent } from './components/registrar/registrar-enfer/registrar-enfer.component';
import { RegistrarMedicComponent } from './components/registrar/registrar-medic/registrar-medic.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SupportProviderService } from '../core/providers/support-provider.service';

const compoment = [
  AdmComponent ,AdmAcercaDeComponent, AdmContactosComponent, AdmHabitacionesLibresComponent,
  AdmHabitacionesOcupadasComponent, AdmHomeScreenComponent, AdmInfoPacienteComponent,
  AdmListaPacienteComponent, AdmPacienteComponent, AdmPaciente2Component,
  SidebarAdmComponent, AdmRegistrarEnferComponent, AdmRegistrarMedicComponent,
  RegistrarEnferComponent, RegistrarMedicComponent
]

@NgModule({
  imports: [
    CommonModule,
    AdmRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ], providers: [
    SupportProviderService
  ],
  declarations: [...compoment]

})
export class AdmModule { }
