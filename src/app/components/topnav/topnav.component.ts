import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-topnav',
  templateUrl: './topnav.component.html',
  styleUrls: ['./topnav.component.scss']
})
export class TopnavComponent implements OnInit {

  
  @Input()
  isLogged: boolean

  @Input()
  userEmail: string;

  constructor( private as: AuthService) { }

  ngOnInit() {
    
  }
  onLoggedOut(){
    this.as.logout();
    this.isLogged = false;
    window.location.reload();
  }

}
