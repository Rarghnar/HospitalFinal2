import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Paciente } from '../../../core/models/paciente.model';
import { PacienteService } from '../../../core/providers/paciente/paciente.service';
import { Router, ActivatedRoute } from '@angular/router';
import { PacienteServiceService } from '../../../core/services/paciente/paciente-service.service';

@Component({
  selector: 'app-adm-check-paciente',
  templateUrl: './adm-check-paciente.component.html',
  styleUrls: ['./adm-check-paciente.component.less']
})
export class AdmCheckPacienteComponent implements OnInit {

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
      ultimoChequeo: new FormControl('', [Validators.required]),
      chequeadoPor: new FormControl('', [Validators.required]),
      presionArterial: new FormControl('', [Validators.required]),
      ritmoCardiaco: new FormControl('', [Validators.required]),
      nivelInsulina: new FormControl('', [Validators.required]),
    });
  }

  sendIdPaciente(): string {
    //console.log(this.pacienteService.sendIdPaciente());
    return this.pacienteService.sendIdPaciente();
  }

  public async modPaciente() {
    let paciente: Partial<Paciente> = {
      ultimoChequeo: this.checkoutForm.get('ultimoChequeo').value,
      chequeadoPor: this.checkoutForm.get('chequeadoPor').value,
      presionArterial: this.checkoutForm.get('presionArterial').value,
      ritmoCardiaco: this.checkoutForm.get('ritmoCardiaco').value,
      nivelInsulina: this.checkoutForm.get('nivelInsulina').value,
    }
    try {
      //console.log(paciente);
      await  this.pacienteProviderService.modPaciente(this.id, paciente);
      alert("Paciente Agregado");
    } catch (error) {
      alert("Error al agregar al Paciente");
    }
  }

  get ultimoChequeo() { return this.checkoutForm.get('ultimoChequeo'); }
  get chequeadoPor() { return this.checkoutForm.get('chequeadoPor'); }
  get presionArterial() { return this.checkoutForm.get('presionArterial'); }
  get ritmoCardiaco() { return this.checkoutForm.get('ritmoCardiaco'); }
  get nivelInsulina() { return this.checkoutForm.get('nivelInsulina'); }

}
