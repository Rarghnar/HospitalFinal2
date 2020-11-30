import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormControl, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { Paciente } from '../../../../core/models/paciente.model';
import { PacienteService } from '../../../../core/providers/paciente/paciente.service';


@Component({
  selector: 'shared-formulario-checkear-paciente',
  templateUrl: './formulario-checkear-paciente.component.html',
  styleUrls: ['./formulario-checkear-paciente.component.less']
})
export class FormularioCheckearPacienteComponent implements OnInit {

 
  @Input()
  public paciente: Paciente;
  public id: string;

  checkoutForm: FormGroup;
  mensaje:string="";
  isDivVisible=false;

  constructor(private router: Router, private pacienteProviderService: PacienteService,private activedroute: ActivatedRoute) {
    this.checkoutForm = this.createFormGroup();
    this.id = activedroute.snapshot.params['id'];
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
      //password: new FormControl('',[Validators.required])
    });
  }

  public async modPaciente() {
    let paciente = {
      nombres: this.checkoutForm.get('nombres').value,
      apellidos: this.checkoutForm.get('apellidos').value,
      rut: this.checkoutForm.get('rut').value,
    }
    try {
      await  this.pacienteProviderService.modPaciente(this.id, paciente);
      alert("Paciente Agregado");
    } catch (error) {
      alert("Error al agregar al Paciente");
    }
  }

  onSubmit(){
    this.mensaje="Paciente Agregado";
    this.isDivVisible=true;
  }

  get nombres() { return this.checkoutForm.get('nombres'); }
  get rut() { return this.checkoutForm.get('rut'); }
  get apellidos() { return this.checkoutForm.get('apellidos'); }

}
