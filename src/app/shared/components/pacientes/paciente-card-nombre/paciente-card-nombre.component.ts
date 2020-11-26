import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../../../core/models/paciente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-card-nombre',
  templateUrl: './paciente-card-nombre.component.html',
  styleUrls: ['./paciente-card-nombre.component.less']
})
export class PacienteCardNombreComponent implements OnInit {

  @Input()
  paciente: Paciente[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getUrl(): string {
    return this.router.url;
  }
}
