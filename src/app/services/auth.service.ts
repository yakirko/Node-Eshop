import { Injectable } from '@angular/core';
import { AngularFireAuth } from 'angularfire2/auth'

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth) { }


login(email: string, password: string){

  return new Promise(
    (resolve, reject)=>{
           this.afAuth.auth.signInWithEmailAndPassword(email, password).then(
           (userData)=> {
             console.log(userData);
             resolve(userData);
           }
         )
})
}

getAuth(){
  return this.afAuth.authState;
}

logout() {
  this.afAuth.auth.signOut();
}

}