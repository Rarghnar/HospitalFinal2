import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PacienteService } from '../../../../core/providers/paciente/paciente.service';
import { Paciente } from '../../../../core/models/paciente.model';
import { CamaService } from '../../../../core/providers/cama/cama.service';
import { Cama } from '../../../../core/models/cama.model';

@Component({
  selector: 'shared-formulario-agregar-paciente-part1',
  templateUrl: './formulario-agregar-paciente-part1.component.html',
  styleUrls: ['./formulario-agregar-paciente-part1.component.less']
})
export class FormularioAgregarPacientePart1Component implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor(private router: Router, private pacienteProviderService: PacienteService, private camaProviderService: CamaService) { 
    this.checkoutForm = this.createFormGroup();
  }

  
  createFormGroup() {
    return new FormGroup({
      nombres: new FormControl('', [Validators.required]),
      apellidos: new FormControl('', [Validators.required]),
      rut: new FormControl('', [Validators.required,Validators.minLength(9),Validators.pattern("^[0-9]+-[0-9k]{1,1}$")]),
      nombreRep: new FormControl('', [Validators.required]),
      apellidosRep: new FormControl('', [Validators.required]),
      rutRep: new FormControl('', [Validators.required,Validators.minLength(9),Validators.pattern("^[0-9]+-[0-9k]{1,1}$")]),
      dia: new FormControl('', [Validators.required]),
      mes: new FormControl('', [Validators.required]),
      anio: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      direccion: new FormControl('', [Validators.required]),
      edad: new FormControl('', [Validators.required, Validators.pattern("^[0-9]{1,3}$")]),
      nacionalidad: new FormControl('', [Validators.required]),
      ciudad: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      telefonoRep: new FormControl('', [Validators.required]),
      nombresDoc: new FormControl('', [Validators.required]),
      rutDoc: new FormControl('', [Validators.required,Validators.minLength(9),Validators.pattern("^[0-9]+-[0-9k]{1,1}$")]),
      apellidosDoc: new FormControl('', [Validators.required]),
      atencion: new FormControl('', [Validators.required]),
      motivo: new FormControl('', [Validators.required]),
      fechaIng: new FormControl('', [Validators.required]),
      horaIng: new FormControl('', [Validators.required]),
      cama: new FormControl('', [Validators.required]),
      habitacion: new FormControl('', [Validators.required])
    });
  }
  
  ngOnInit(): void {
  }

  public async addPaciente() {
    let paciente : Partial<Paciente> = {
      nombres: this.checkoutForm.get('nombres').value,
      apellidos: this.checkoutForm.get('apellidos').value,
      rut: this.checkoutForm.get('rut').value,
      diaNacimiento: this.checkoutForm.get('dia').value,
      mesNacimiento: this.checkoutForm.get('mes').value,
      anioNacimiento: this.checkoutForm.get('anio').value,
      sexo: this.checkoutForm.get('sexo').value,
      edad: this.checkoutForm.get('edad').value,
      nacionalidad: this.checkoutForm.get('nacionalidad').value,
      provincia: this.checkoutForm.get('ciudad').value,
      direccion: this.checkoutForm.get('direccion').value,
      telefono: this.checkoutForm.get('telefono').value,
      nombresRepresentante: this.checkoutForm.get('nombreRep').value,
      apellidosRepresentante: this.checkoutForm.get('apellidosRep').value,
      rutRepresentante: this.checkoutForm.get('rutRep').value,
      telefonoRepresentante: this.checkoutForm.get('telefonoRep').value,
      nombresDoctor: this.checkoutForm.get('nombresDoc').value,
      apellidosDoctor: this.checkoutForm.get('apellidosDoc').value,
      rutDoctor: this.checkoutForm.get('rutDoc').value,
      tipoAtencionMedica: this.checkoutForm.get('atencion').value,
      motivo: this.checkoutForm.get('motivo').value,
      fechaIngreso: this.checkoutForm.get('fechaIng').value,
      horaIngreso: this.checkoutForm.get('horaIng').value,
      cama: this.checkoutForm.get('cama').value,
      habitacion: this.checkoutForm.get('habitacion').value
    }
    try {
      await this.pacienteProviderService.addPaciente(paciente).toPromise();
      alert("Paciente Agregado");
    } catch (error) {
      alert("Error al agregar al Paciente");
    }
  }


  public async addCama() {
    let cama: Partial<Cama> = {
      numeroDeCama: this.checkoutForm.get('cama').value,
      nombrePaciente: this.checkoutForm.get('nombres').value,
      apellidosPaciente: this.checkoutForm.get('apellidos').value,
      rutPaciente: this.checkoutForm.get('rut').value,
      nombreMedicoEncargado: this.checkoutForm.get('nombresDoc').value,
      apellidosMedicoEncargado: this.checkoutForm.get('apellidosDoc').value,
      rutMedicoEncargado: this.checkoutForm.get('rutDoc').value,
      camaLibre: "false"
    }
    try {
      await this.camaProviderService.addCama(cama).toPromise();
      //alert("Paciente Agregado");
    } catch (error) {
      //alert("Error al agregar al Paciente");
    }
  }

  public getUrl() {
    return this.router.url;
  }
  


  navegarCancelar() {
    this.router.navigate(['/user/home'])
  }

  navegarCancelarAdmin() {
    this.router.navigate(['/adm/home'])
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

  get nombresDoc() { return this.checkoutForm.get('nombresDoc'); }
  get rutDoc() { return this.checkoutForm.get('rutDoc'); }
  get apellidosDoc() { return this.checkoutForm.get('apellidosDoc'); }
  get atencion() { return this.checkoutForm.get('atencion');}
  get motivo() { return this.checkoutForm.get('motivo');}
  get fechaIng() { return this.checkoutForm.get('fechaIng');}
  get horaIng() { return this.checkoutForm.get('horaIng');}
  //get fechaSal() { return this.checkoutForm.get('fechaSal');}
  //get horaSal() { return this.checkoutForm.get('horaSal');}
  get cama() { return this.checkoutForm.get('cama');}
  get habitacion() { return this.checkoutForm.get('habitacion'); }
  //get causa() { return this.checkoutForm.get('causa');}
  //get password() { return this.checkoutForm.get('password'); }
  





  

  //Declaraciones
  /////////////////////////////////////////

  public comunes: string[] = ["","1", "2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15",
    "16", "17", "18", "19", "20", "21", "22", "23", "24", "25", "26", "27", "28", "29", "30", "31"];
  
  public meses: string[] = ["", "Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agosto",
    "Septiembre", "Octubre", "Noviembre", "Diciembre"];
  
  public anios: string[] = ["", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010"];

  public ciudades: string[] = ["", "Valparaiso", "Santiago", "Angol", "Antofagasta", "Arica", "Bulnes", "Calama",
    "Castro", "Cauquenes", "Chaitén", "Chañaral", "Chile Chico", "Cochrane", "Colina", "Concepción",
    "Copiapó", "Coquimbo", "La serena", "Coyhaique", "Curicó", "Hangan Roa", "Illapel", "Iquique",
    "La Ligua", "La Unión", "Lebu", "Linares", "Los Andes", "Los Ángeles", "Melipilla", "Osorno",
    "Ovalle", "Pichilemu", "Porvenir", "Pozo Almonte", "Puente alto", "Puerto Aysen", "Puerto Montt",
    "Puerto Natales", "Puerto Williams", "Punta Arenas", "Putre", "Quillota", "Quilpue", "Quirihue",
    "Rancagua", "San Antonio", "San Bernardo", "San Carlos", "San Felipe", "San Fernando", "Talagante",
    "Talca","Tocopilla","Vallenar"];
}
