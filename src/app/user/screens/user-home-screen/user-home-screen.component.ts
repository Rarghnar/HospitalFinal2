import { Component, OnInit } from '@angular/core';

import { ShoperService } from "@core/services/shoper/shoper.service";
import { Shoper } from '@models/shoper.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user-home-screen',
  templateUrl: './user-home-screen.component.html',
  styleUrls: ['./user-home-screen.component.less']
})
export class UserHomeScreenComponent implements OnInit {

  //constructor(private ShoperService: ShoperService) { }
  constructor(private router: Router) { }

  ngOnInit(): void {
    //let Shoper: Shoper
  }

  navegarPaciente() {
    this.router.navigate(['/user/paciente']);
  }

  navegarHabitaciones() {
    this.router.navigate(['/user/habitaciones-libres']);
  }

 
  

}
