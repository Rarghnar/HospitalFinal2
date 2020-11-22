import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-formulario-agregar-paciente-part1',
  templateUrl: './formulario-agregar-paciente-part1.component.html',
  styleUrls: ['./formulario-agregar-paciente-part1.component.less']
})
export class FormularioAgregarPacientePart1Component implements OnInit {

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
      nombreRep: new FormControl('', [Validators.required]),
      apellidosRep: new FormControl('', [Validators.required]),
      rutRep: new FormControl('', [Validators.required]),
      dia: new FormControl('', [Validators.required]),
      mes: new FormControl('', [Validators.required]),
      anio: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required]),
      nacionalidad: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      telefonoRep: new FormControl('', [Validators.required]),
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
  get nombreRep() { return this.checkoutForm.get('nombreRep'); }
  get apellidosRep() { return this.checkoutForm.get('apellidosRep'); }
  get rutRep() { return this.checkoutForm.get('rutRep'); }
  get dia() { return this.checkoutForm.get('dia'); }
  get mes() { return this.checkoutForm.get('mes'); }
  get anio() { return this.checkoutForm.get('anio'); }
  get sexo() { return this.checkoutForm.get('sexo');}
  get direccion() { return this.checkoutForm.get('direccion');}
  get edad() { return this.checkoutForm.get('edad');}
  get nacionalidad() { return this.checkoutForm.get('nacionalidad');}
  get ciudad() { return this.checkoutForm.get('ciudad'); }
  get telefono() { return this.checkoutForm.get('telefono'); }
  get telefonoRep() { return this.checkoutForm.get('telefonoRep'); }
  //get password() { return this.checkoutForm.get('password');}
  


}
