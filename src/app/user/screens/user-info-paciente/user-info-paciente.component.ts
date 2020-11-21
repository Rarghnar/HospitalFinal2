import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '@core/models/paciente.model';
import { PacienteService } from '../../../core/services/paciente/paciente.service';

@Component({
  selector: 'app-user-info-paciente',
  templateUrl: './user-info-paciente.component.html',
  styleUrls: ['./user-info-paciente.component.less']
})
export class UserInfoPacienteComponent implements OnInit {

  public id: number;
  public paciente: Paciente;

  constructor(private pacienteService: PacienteService, private activedroute: ActivatedRoute) {
    this.id = activedroute.snapshot.params['is'];
   }

  ngOnInit(): void {
    this.paciente = this.pacienteService.getPacienteById(this.id);
  }

}
