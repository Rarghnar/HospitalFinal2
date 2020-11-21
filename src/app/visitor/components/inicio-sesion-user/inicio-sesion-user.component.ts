import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'cuadro-inicio-sesion-user',
  templateUrl: './inicio-sesion-user.component.html',
  styleUrls: ['./inicio-sesion-user.component.less']
})
export class InicioSesionUserComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor(private router: Router) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  navegarInicio(){
    this.router.navigate(['/user/home']);
  }

  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required])
    });
  }

  onSubmit(){
    this.mensaje="datos completados";
    this.isDivVisible=true;
  }

  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password'); }

}
