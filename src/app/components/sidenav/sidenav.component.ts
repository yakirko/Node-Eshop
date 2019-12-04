import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-sidenav',
  templateUrl: './sidenav.component.html',
  styleUrls: ['./sidenav.component.scss']
})
export class SidenavComponent implements OnInit {

  userEmail:string;  

  @Input()
  isLogged: boolean

  constructor() { }

  ngOnInit() {
    this.userEmail = '[user - email]';
  }

}
