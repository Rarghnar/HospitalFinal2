import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'shared-navbar-user',
  templateUrl: './navbar-user.component.html',
  styleUrls: ['./navbar-user.component.less']
})
export class NavbarUserComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  public getUrl(): string{
    return this.router.url;
  }

}
