import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HabitacionService } from '../../../core/providers/habitacion/habitacion.service';
import { Habitacion } from '../../../core/models/habitacion.model';

@Component({
  selector: 'app-user-perfile',
  templateUrl: './user-perfile.component.html',
  styleUrls: ['./user-perfile.component.less']
})
export class UserPerfileComponent implements OnInit {


  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor( private habitacionProviderService: HabitacionService) {
    this.checkoutForm = this.createFormGroup();
   }

  
   createFormGroup() {
    return new FormGroup({
      numeroPiso: new FormControl('', [Validators.required]),
      cantidadCamas: new FormControl('', [Validators.required]),
      codigoHabitacion: new FormControl('',[Validators.required])
    });
  }


  ngOnInit(): void {
  }

  public async addHabitacion() {
    let habitacion : Partial<Habitacion> = {
      numeroPiso: this.checkoutForm.get('numeroPiso').value,
      cantidadCamas: this.checkoutForm.get('cantidadCamas').value,
      codigoHabitacion: this.checkoutForm.get('codigoHabitacion').value

    }
    //return this.habitacionProviderService.addHabitacion(habitacion)
    try {
      await this.habitacionProviderService.addHabitacion(habitacion).toPromise();
      alert("Habitacion Agregada");
    } catch (error) {
      alert("Error al agregar la habitacion");
    }
  }


  onSubmit(){
    this.mensaje="datos completados";
    this.isDivVisible=true;
  }

  get numeroPiso() { return this.checkoutForm.get('numeroPiso'); }
  get cantidadCamas() { return this.checkoutForm.get('cantidadCamas'); }
  get codigoHabitacion() { return this.checkoutForm.get('codigoHabitacion'); }

}
