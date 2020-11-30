import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { EnfermeraService } from '../../../../core/providers/enfermera/enfermera.service';
import { Enfermera } from '../../../../core/models/enfermera.model';


@Component({
  selector: 'app-registrar-enfer',
  templateUrl: './registrar-enfer.component.html',
  styleUrls: ['./registrar-enfer.component.less']
})
export class RegistrarEnferComponent implements OnInit {

  
  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor(private router: Router, private enfermeraProviderService: EnfermeraService) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  public async addEnfermera() {
    let enfermera: Partial<Enfermera> = {
      nombres: this.checkoutForm.get('nombre').value,
      apellidos: this.checkoutForm.get('apellido').value,
      sexo: this.checkoutForm.get('sexo').value,
      telefono: this.checkoutForm.get('telefono').value,
      email: this.checkoutForm.get('usuario').value,
      rut: this.checkoutForm.get('rut').value,
      contraseña: this.checkoutForm.get('password').value,
      contraseñaRepetida: this.checkoutForm.get('password2').value
    }
    try {
      await this.enfermeraProviderService.addEnfermera(enfermera).toPromise();
      alert("Enfermera Agregada")
    } catch (error) {
      alert("Error al agregar enfermera")
    }
  }


  navegarInicio(){
    this.router.navigate(['/screen-home-ingresado']);
  }

  
  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      rut: new FormControl('',[Validators.required, Validators.pattern("^[0-9]+-[0-9k]{1,1}$")]),
      password2: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
    });
  }

  onSubmit(){
    this.mensaje="datos completados";
    this.isDivVisible=true;
  }

  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password'); }
  get nombre() { return this.checkoutForm.get('nombre'); }
  get apellido() { return this.checkoutForm.get('apellido'); }
  get rut() { return this.checkoutForm.get('rut'); }
  get password2() { return this.checkoutForm.get('password2'); }
  get telefono() { return this.checkoutForm.get('telefono');}
  get sexo() { return this.checkoutForm.get('sexo'); }
}
