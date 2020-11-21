import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adm-home-screen',
  templateUrl: './adm-home-screen.component.html',
  styleUrls: ['./adm-home-screen.component.less']
})
export class AdmHomeScreenComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

    // tslint:disable-next-line: typedef
    navegarPaciente() {
      this.router.navigate(['/adm/paciente']);
    }
  
    // tslint:disable-next-line: typedef
    navegarHabitaciones() {
      this.router.navigate(['/adm/habitaciones-ocupadas']);
    }
  
    // tslint:disable-next-line: typedef
    navegarAgregarMedico() {
      this.router.navigate(['/adm/registrar-medic']);
    }

}
