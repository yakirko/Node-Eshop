import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, RouterState, CanActivate } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class AuthGuard implements  CanActivate{

    constructor(private afAuth: AngularFireAuth,  private router: Router,){

    }
    
    canActivate(): Observable<boolean>{
      return this.afAuth.authState.pipe(
        map(
          (auth) => {
            if(auth) {
              return true;
            }else{
              this.router.navigate(['/login']);
              return false;
            }
          }
      ));
    }



}
    

