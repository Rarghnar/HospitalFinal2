import { Component, Input, OnInit } from '@angular/core';
import { Cama } from '../../../core/models/cama.model';
import { Enfermera } from '../../../core/models/enfermera.model';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.less']
})
export class SupportListComponent implements OnInit {

  @Input()
  enfermera: Enfermera[];

  constructor() { }

  ngOnInit(): void {
  }

}
