import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-registrar-medic',
  templateUrl: './registrar-medic.component.html',
  styleUrls: ['./registrar-medic.component.less']
})
export class RegistrarMedicComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor(private router: Router) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }

  navegarInicio(){
    this.router.navigate(['/screen-home-ingresado']);
  }

  createFormGroup() {
    return new FormGroup({
      usuario: new FormControl('', [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$")]),
      password: new FormControl('',[Validators.required]),
      nombre: new FormControl('',[Validators.required]),
      apellido: new FormControl('',[Validators.required]),
      rut: new FormControl('',[Validators.required]),
      password2: new FormControl('', [Validators.required]),
      telefono: new FormControl('', [Validators.required]),
      sexo: new FormControl('', [Validators.required]),
      especialidad: new FormControl('',[Validators.required]),
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
  get especialidad() { return this.checkoutForm.get('especialidad');}




  //Declaraciones

  especialidades: string[] = ["","Alergología", "Anestesiología", "Angiología", "Cardiología", "Endocrinología",
    "Epidemiología", "Gastroenterología", "Geriatría", "Hematología", "Hepatología", "Infectología",
    "Medicina aeroespacial", "Medicina del deporte", "Medicina de emergencia", "Medicina familiar y comunitaria",
    "Medicina física y rehabilitación", "Medicina forense", "Medicina intensiva", "Medicina interna",
    "Medicina preventiva y salud pública", "Medicina del trabajo", "Nefrología", "Neumología", "Neurología",
    "Nutriología", "Oncología médica", "Oncología radioterápica", "Pediatría", "Psiquiatría", "Reumatología",
    "Toxicología", "Cirugía cardíaca", "Cirugía general", "Cirugía oral y maxilofacial", "Cirugía ortopédica",
    "Cirugía pediátrica", "Cirugía plástica", "Cirugía torácica", "Cirugía vascular", "Neurocirugía",
    "Dermatología", "Ginecología y obstetricia o tocología", "Oftalmología", "Otorrinolaringología",
    "Traumatología", "Urología Análisis clínico", "Anatomía patológica", "Bioquímica clínica", "Farmacología",
    "Genética médica", "Inmunología", "Medicina nuclear", "Microbiología y parasitología", "Neurofisiología clínica",
    "Radiología"];
}
