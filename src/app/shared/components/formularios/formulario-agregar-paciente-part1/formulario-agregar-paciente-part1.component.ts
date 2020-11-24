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
  






  //Declaraciones
  /////////////////////////////////////////

  comunes: string[] = ["","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
    "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  
  meses: string[] = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  anios: string[] = ["", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010"];

  ciudades: string[] = ["", "Valparaiso", "Santiago", "Angol", "Antofagasta", "Arica", "Bulnes", "Calama",
    "Castro", "Cauquenes", "Chaitén", "Chañaral", "Chile Chico", "Cochrane", "Colina", "Concepción",
    "Copiapó", "Coquimbo", "La serena", "Coyhaique", "Curicó", "Hangan Roa", "Illapel", "Iquique",
    "La Ligua", "La Unión", "Lebu", "Linares", "Los Andes", "Los Ángeles", "Melipilla", "Osorno",
    "Ovalle", "Pichilemu", "Porvenir", "Pozo Almonte", "Puente alto", "Puerto Aysen", "Puerto Montt",
    "Puerto Natales", "Puerto Williams", "Punta Arenas", "Putre", "Quillota", "Quilpue", "Quirihue",
    "Rancagua", "San Antonio", "San Bernardo", "San Carlos", "San Felipe", "San Fernando", "Talagante",
    "Talca","Tocopilla","Vallenar"];
}
