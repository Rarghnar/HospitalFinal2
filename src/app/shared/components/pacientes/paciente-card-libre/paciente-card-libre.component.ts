import { Component, Input, OnInit } from '@angular/core';
import { Paciente } from '../../../../core/models/paciente.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-paciente-card-libre',
  templateUrl: './paciente-card-libre.component.html',
  styleUrls: ['./paciente-card-libre.component.less']
})
export class PacienteCardLibreComponent implements OnInit {

  @Input()
  public paciente: Paciente;

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegarinfo1() {
    this.router.navigate(['/user/paciente']);
  }
  
  navegarinfo2() {
    this.router.navigate(['/adm/paciente']);
  }

  public getUrl(): String {
    return this.router.url;
  }

}
