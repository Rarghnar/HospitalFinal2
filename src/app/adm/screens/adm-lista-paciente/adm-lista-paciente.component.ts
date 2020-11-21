import { Component, OnInit } from '@angular/core';
import { Paciente } from '@core/models/paciente.model';
import { PacienteService } from '../../../core/services/paciente/paciente.service';

@Component({
  selector: 'app-adm-lista-paciente',
  templateUrl: './adm-lista-paciente.component.html',
  styleUrls: ['./adm-lista-paciente.component.less']
})
export class AdmListaPacienteComponent implements OnInit {

  public pacientes: Paciente[];

  constructor(private pacienteService: PacienteService) { }

  ngOnInit(): void {
    this.pacientes = this.pacienteService.getALLPacientes();
  }

}
