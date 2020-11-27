import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MedicoService } from '../../../../core/providers/medico/medico.service';
import { Medico } from '../../../../core/models/medico.model';


@Component({
  selector: 'app-registrar-medic',
  templateUrl: './registrar-medic.component.html',
  styleUrls: ['./registrar-medic.component.less']
})
export class RegistrarMedicComponent implements OnInit {

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor(private router: Router, private medicoProviderService: MedicoService) { 
    this.checkoutForm = this.createFormGroup();
  }

  ngOnInit(): void {
  }


  public async addMedico() {
    let medico: Partial<Medico> = {
      nombres: this.checkoutForm.get('nombre').value,
      apellidos: this.checkoutForm.get('apellido').value,
      sexo: this.checkoutForm.get('sexo').value,
      telefono: this.checkoutForm.get('telefono').value,
      especialidad: this.checkoutForm.get('especialidad').value,
      email: this.checkoutForm.get('usuario').value,
      rut: this.checkoutForm.get('rut').value,
      contraseña: this.checkoutForm.get('password').value,
      contraseñaRepetida: this.checkoutForm.get('password2').value
    }
    try {
      await this.medicoProviderService.addMedico(medico).toPromise();
      alert("Medico Agregado");
    } catch (error) {
      alert("Error al agregar Medico")
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
      rut: new FormControl('',[Validators.required,Validators.pattern("^[0-9]+-[0-9k]{1,1}$")]),
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
