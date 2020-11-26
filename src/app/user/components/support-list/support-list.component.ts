import { Component, Input, OnInit } from '@angular/core';
import { Enfermera } from '../../../core/models/enfermera.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-support-list',
  templateUrl: './support-list.component.html',
  styleUrls: ['./support-list.component.less']
})
export class SupportListComponent implements OnInit {

  @Input()
  enfermera: Enfermera[];

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getUrl(): string {
    return this.router.url;
  }
}
