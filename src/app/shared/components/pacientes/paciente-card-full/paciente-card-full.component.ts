import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../../../core/models/paciente.model';
import { Router } from '@angular/router';
import { PacienteServiceService } from '../../../../core/services/paciente/paciente-service.service';
import { PacienteService } from '../../../../core/providers/paciente/paciente.service';

@Component({
  selector: 'app-paciente-card-full',
  templateUrl: './paciente-card-full.component.html',
  styleUrls: ['./paciente-card-full.component.less']
})
export class PacienteCardFullComponent implements OnInit {

  @Input()
  public paciente: Paciente;

  constructor(private router: Router, private pacienteService: PacienteServiceService, private pacienteProviderService: PacienteService) { }

  ngOnInit(): void {
  }

  public getPaciente() {
    this.pacienteService.getIdPaciente(this.paciente._id);
  }

  public deletePaciente() {
    this.pacienteProviderService.deletePaciente(this.paciente._id)
  }

  public getUrl(): string {
    return this.router.url;
  }
}
