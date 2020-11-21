import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NavbarUserComponent } from './components/navbar-user/navbar-user.component';
import { FootersComponent } from './components/footers/footers.component';
import { FormularioAgregarPacienteComponent } from './components/formulario-agregar-paciente/formulario-agregar-paciente.component';
import { FormularioAgregarPacientePart2Component } from './components/formulario-agregar-paciente-part2/formulario-agregar-paciente-part2.component';
import { ControlContainer, ReactiveFormsModule, FormsModule } from '@angular/forms';
import { PacienteCardComponent } from './components/pacientes/paciente-card/paciente-card.component';
import { PacienteCardFullComponent } from './components/pacientes/paciente-card-full/paciente-card-full.component';
import { PacienteCardLibreComponent } from './components/pacientes/paciente-card-libre/paciente-card-libre.component';
import { PacienteCardNombreComponent } from './components/pacientes/paciente-card-nombre/paciente-card-nombre.component';
import { RouterLink } from '@angular/router';

const componets = [
  NavbarComponent, NavbarUserComponent, FootersComponent,
  FormularioAgregarPacienteComponent, FormularioAgregarPacientePart2Component,
  PacienteCardComponent, PacienteCardFullComponent, PacienteCardLibreComponent,
  PacienteCardNombreComponent
]

@NgModule({
  declarations: [...componets],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  exports: [...componets]
})
export class SharedModule { }
