import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shareddd-navbar-adm',
  templateUrl: './navbar-adm.component.html',
  styleUrls: ['./navbar-adm.component.less']
})
export class NavbarAdmComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getUrl(): string{
    return this.router.url;
  }
}
