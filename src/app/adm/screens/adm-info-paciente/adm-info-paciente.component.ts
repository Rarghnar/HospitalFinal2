import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../../../core/models/paciente.model';
import { PacienteService } from '../../../core/services/paciente/paciente.service';

@Component({
  selector: 'app-adm-info-paciente',
  templateUrl: './adm-info-paciente.component.html',
  styleUrls: ['./adm-info-paciente.component.less']
})
export class AdmInfoPacienteComponent implements OnInit {

  public id: number;
  public paciente: Paciente;
  constructor(private pacienteService: PacienteService, private activedroute: ActivatedRoute) {
    this.id = activedroute.snapshot.params['id']
   }

  ngOnInit(): void {
    this.paciente = this.pacienteService.getPacienteById(this.id);
  }

}
