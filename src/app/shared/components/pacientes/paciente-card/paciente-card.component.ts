import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../../../core/models/paciente.model';

@Component({
  selector: 'app-paciente-card',
  templateUrl: './paciente-card.component.html',
  styleUrls: ['./paciente-card.component.less']
})
export class PacienteCardComponent implements OnInit {

  @Input()
  public paciente: Paciente;

  constructor() { }

  ngOnInit(): void {
  }

}
