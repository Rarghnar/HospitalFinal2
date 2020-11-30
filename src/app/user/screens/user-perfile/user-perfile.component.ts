import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HabitacionService } from '../../../core/providers/habitacion/habitacion.service';
import { Habitacion } from '../../../core/models/habitacion.model';
import { observable, Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';
import { Medico } from '../../../core/models/medico.model';
import { MedicoService } from '../../../core/providers/medico/medico.service';

@Component({
  selector: 'app-user-perfile',
  templateUrl: './user-perfile.component.html',
  styleUrls: ['./user-perfile.component.less']
})
export class UserPerfileComponent implements OnInit {

  public medico$: Observable<Medico[]>;
  public id: string;

  constructor(private medicoProviderService : MedicoService) { 
    this.medico$ = this.getMedico();
   }

  getMedico() : Observable<Medico[]> {
    return this.medicoProviderService.getMedico();
  }
  ngOnInit(): void {
  }

}
