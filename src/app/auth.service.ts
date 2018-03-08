import { Injectable } from '@angular/core';

import { AngularFireAuth } from 'angularfire2/auth';
import * as firebase from 'firebase/app';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class AuthService {
    user: Observable<firebase.User>;
    valore:number;

    constructor(private firebaseAuth: AngularFireAuth) {
        this.user = firebaseAuth.authState;
        this.valore=2;
    }

    signup(email: string, password: string) {
        this.firebaseAuth
            .auth
            .createUserWithEmailAndPassword(email, password)
            .then(value => {
                console.log('registrazione corretta!', value);
            })
            .catch(err => {
                console.log('registrazione scorretta',err.message);
            });
    }

    login(email: string, password: string) {

        this.firebaseAuth
            .auth
            .signInWithEmailAndPassword(email, password)
            .then(value => {
                console.log('Nice, it worked!');
            })
            .catch(err => {
                console.log('Something went wrong:',err.message);
            });



    }

    logout() {
        this.firebaseAuth
            .auth
            .signOut();
    }

}