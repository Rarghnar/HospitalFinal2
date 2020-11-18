import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'cuadro-inicio-sesion-adm',
  templateUrl: './inicio-sesion-adm.component.html',
  styleUrls: ['./inicio-sesion-adm.component.less']
})
export class InicioSesionAdmComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje: string = "";
  isDivisible = false;

  constructor(private router: Router) {
    this.checkoutForm = this.createFormGroup();
   }

  ngOnInit(): void {
  }

  navegarInicioAdm() {
    this.router.navigate(['/adm/home'])
  }  

  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required])
    })
  }

  onSubmit() {
    this.mensaje = "datos completados";
    this.isDivisible = true;
  }

  get usuario() { return this.checkoutForm.get('usuario'); }
  get password() { return this.checkoutForm.get('password');}
}
