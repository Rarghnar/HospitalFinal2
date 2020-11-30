import { Component, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Paciente } from '../../../core/models/paciente.model';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { PacienteServiceService } from '../../../core/services/paciente/paciente-service.service';

@Component({
  selector: 'app-user-checkear-paciente',
  templateUrl: './user-checkear-paciente.component.html',
  styleUrls: ['./user-checkear-paciente.component.less']
})
export class UserCheckearPacienteComponent implements OnInit {

  //public pacientes$: Observable<Paciente>;
  public id: string;



  constructor(private pacienteProviderService: PacienteService,  private router: Router, private pacienteService: PacienteServiceService, private activedroute: ActivatedRoute) {
    this.checkoutForm = this.createFormGroup();
    this.id = activedroute.snapshot.params['id'];

  }

  ngOnInit(): void {
  }


  onSubmit(){
    this.mensaje="Paciente Agregado";
    this.isDivVisible=true;
  }

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible = false;
  
  createFormGroup() {
    return new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      rut: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
    });
  }

  sendIdPaciente(): string {
    //console.log(this.pacienteService.sendIdPaciente());
    return this.pacienteService.sendIdPaciente();
  }

  public async modPaciente() {
    let paciente: Partial<Paciente> = {
      nombres: this.checkoutForm.get('nombres').value,
      apellidos: this.checkoutForm.get('apellidos').value,
      rut: this.checkoutForm.get('rut').value,
    }
    try {
      //console.log(paciente);
      await  this.pacienteProviderService.modPaciente(this.id, paciente);
      alert("Paciente Agregado");
    } catch (error) {
      alert("Error al agregar al Paciente");
    }
  }

  get nombres() { return this.checkoutForm.get('nombres'); }
  get rut() { return this.checkoutForm.get('rut'); }
  get apellidos() { return this.checkoutForm.get('apellidos'); }

}
