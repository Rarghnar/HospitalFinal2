import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Medico } from '../../../../core/models/medico.model';
import { MedicoService } from '../../../../core/services/medico/medico.service';

@Component({
  selector: 'shared-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.less']
})
export class NavbarUserComponent implements OnInit {

 /* @Input()
  public medicos: Medico[];*/

  constructor(private router: Router) { }

  /*ngOnInit(): void {
    this.medicos = this.medicoService.getALLMedicos();

  }*/

  ngOnInit(): void {
  }

  public getUrl(){
    return this.router.url;
  }

}
