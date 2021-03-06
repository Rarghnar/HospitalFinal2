import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paciente } from '../../../core/models/paciente.model';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-adm-info-paciente',
  templateUrl: './adm-info-paciente.component.html',
  styleUrls: ['./adm-info-paciente.component.less']
})
export class AdmInfoPacienteComponent implements OnInit {

  public id: string;
  public pacientes$: Observable<Paciente>;

  constructor(private pacienteProvider: PacienteService, private activedroute: ActivatedRoute) {
    this.id = activedroute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.pacientes$ = this.pacienteProvider.getPacienteById(this.id);
  }

}
