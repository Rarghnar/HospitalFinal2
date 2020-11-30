import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Enfermera } from '../../../core/models/enfermera.model';
import { EnfermeraService } from '../../../core/providers/enfermera/enfermera.service';

@Component({
  selector: 'app-user-list-screen',
  templateUrl: './user-list-screen.component.html',
  styleUrls: ['./user-list-screen.component.less']
})
export class UserListScreenComponent implements OnInit {

  public enfermera$: Observable<Enfermera[]>;

  constructor(private enfermeraProvider: EnfermeraService) {
    this.enfermera$ = this.getEnfermera();
   }

  ngOnInit(): void {
  }

  getEnfermera(): Observable<Enfermera[]> {
    return this.enfermeraProvider.getEnfermera();
  }
}
