import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'shared-formulario-checkear-paciente',
  templateUrl: './formulario-checkear-paciente.component.html',
  styleUrls: ['./formulario-checkear-paciente.component.less']
})
export class FormularioCheckearPacienteComponent implements OnInit {

 
  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor(private router: Router) {
    this.checkoutForm = this.createFormGroup();
   }

  public getUrl() {
    return this.router.url;
  }
  
  ngOnInit(): void {
  }

  navegarPaciente2() {
    this.router.navigate(['/user/paciente2']);
  }

  navegarPaciente2Admin() {
    this.router.navigate(['/adm/paciente2']);
  }
  createFormGroup() {
    return new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      rut: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      fechaNac: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      nacionalidad: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      //password: new FormControl('',[Validators.required])
    });
  }

  onSubmit(){
    this.mensaje="Paciente Agregado";
    this.isDivVisible=true;
  }

  get nombres() { return this.checkoutForm.get('nombres'); }
  get rut() { return this.checkoutForm.get('rut'); }
  get apellidos() { return this.checkoutForm.get('apellidos'); }
  get fechaNac() { return this.checkoutForm.get('fechaNac');}
  get sexo() { return this.checkoutForm.get('sexo');}
  get direccion() { return this.checkoutForm.get('direccion');}
  get edad() { return this.checkoutForm.get('edad');}
  get nacionalidad() { return this.checkoutForm.get('nacionalidad');}
  get ciudad() { return this.checkoutForm.get('ciudad');}

}
