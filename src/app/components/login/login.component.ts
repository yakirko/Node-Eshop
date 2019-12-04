import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { FlashMessagesService }  from 'angular2-flash-messages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor( private as: AuthService,
    private fms:FlashMessagesService,
    private router: Router,
    ) { 
    
  }

  ngOnInit() {
    this.as.getAuth().subscribe(
      (auth) => {
        if(auth){
          this.router.navigate(['/']);
        }
      }
    );
  }

  onSubmit({value,valid}){
      console.log(value,valid);

      this.as.login(value.email, value.password).then(
        (res)=> {
          this.fms.show('customer Updated!!', { cssClass: 'fixed-top m-auto bg-success w-50 text-white text-center', timeout:3000});
          this.router.navigate(['/']);
        }
      ).catch(
        (err)=>{
          this.fms.show('Customer Login Failed', { cssClass: 'fixed-top m-auto bg-success w-50 text-white text-center', timeout:3000})
        }
      );
  }

}

