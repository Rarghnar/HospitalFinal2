import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../../../core/models/paciente.model';

@Component({
  selector: 'app-paciente-card-full',
  templateUrl: './paciente-card-full.component.html',
  styleUrls: ['./paciente-card-full.component.less']
})
export class PacienteCardFullComponent implements OnInit {

  @Input()
  public paciente: Paciente;

  constructor() { }

  ngOnInit(): void {
  }

}
