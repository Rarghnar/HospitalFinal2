import { Component, OnInit } from '@angular/core';
import { Paciente } from '@core/models/paciente.model';
import { PacienteService } from '../../../core/services/paciente/paciente.service';

@Component({
  selector: 'app-user-lista-paciente',
  templateUrl: './user-lista-paciente.component.html',
  styleUrls: ['./user-lista-paciente.component.less']
})
export class UserListaPacienteComponent implements OnInit {

  public pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacientes = this.pacienteService.getALLPacientes();
  }

}
