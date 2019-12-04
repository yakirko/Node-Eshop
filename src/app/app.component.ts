import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  
  isLogged:boolean = false;
  userEmail:string;

  constructor( private as: AuthService)
  {

  }

  ngOnInit(){
    this.as.getAuth().subscribe(
      (auth)=>{
        if(auth) {
          this.isLogged = true;
          this.userEmail = auth.email;
        }
      }
    );
  }
}
