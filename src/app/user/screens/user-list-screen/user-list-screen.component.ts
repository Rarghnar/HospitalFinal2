import { Component, OnInit } from '@angular/core';
import { SupportProviderService } from '../../../core/providers/support-provider.service';
import { Observable } from 'rxjs';
import { Enfermera } from '../../../core/models/enfermera.model';

@Component({
  selector: 'app-user-list-screen',
  templateUrl: './user-list-screen.component.html',
  styleUrls: ['./user-list-screen.component.less']
})
export class UserListScreenComponent implements OnInit {

  public enfermera$: Observable<Enfermera[]>;

  constructor(
    private supportProvider: SupportProviderService
  ) {
    this.enfermera$ = this.getEnfermera();
   }

  ngOnInit(): void {
  }

  getEnfermera(): Observable<Enfermera[]> {
    return this.supportProvider.getEnfermera();
  }
}
