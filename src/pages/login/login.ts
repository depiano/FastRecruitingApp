import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {HomecandidatoPage} from "../homecandidato/homecandidato";
import {SignupPage} from "../signup/signup";
import {AuthService} from "../../app/auth.service";
import {AngularFireDatabase} from "angularfire2/database";
import {HometecnicoPage} from "../hometecnico/hometecnico";
import {Md5} from  '../../../node_modules/md5-typescript/Md5';

@Component({
  selector: 'page-welcome',
  templateUrl: 'login.html'
})
export class LoginPage {
    candidato;
    key: string;
    fullname: string;
    database;
    email: string;
    password: string;
    flag;
    telefono: string;

    constructor(private db: AngularFireDatabase, public authService: AuthService, public navCtrl: NavController, public alertCtrl: AlertController) {
        this.candidato =  {email: '', password: ''};
        sessionStorage.clear();
    }

    onLogin() {
        this.email = this.candidato.email;
        this.password = this.candidato.password;

        /*
        Qui il codice di antonio
         */
        this.flag = 0;
        console.log('Ora controllo i tecnici...');
        this.database = this.db.list('/account/tecnico/');
            const criptPassword = Md5.init(this.password);
            console.log('Voglio effettuare l accesso con, email:', this.email, ' & password: ', criptPassword);

                this.db.list('/account/tecnico/').snapshotChanges().map(actions => {
                    return actions.map(action => ({ key: action.key, ...action.payload.val() }));
                }).subscribe(items => {
                    items.forEach( it => {
                        if (it.email === this.email && it.password === criptPassword) {
                            sessionStorage.clear();
                            this.key = it.key ;
                            this.fullname = it.fullname;
                            this.email = it.email;
                            this.telefono = it.telefono;
                            localStorage.setItem('isLoggedin', 'true');
                            sessionStorage.setItem('SessionKey' , '' + it.key);
                            sessionStorage.setItem('SessionEmail' , '' + it.email);
                            sessionStorage.setItem('SessionFullname' , '' + it.fullname);
                            sessionStorage.setItem('SessionTelefono' , '' + it.telefono);
                            sessionStorage.setItem('SessionType' , 'Tecnico');

                            console.log('la chiave è ', sessionStorage.getItem('SessionKey'));
                            console.log('la chiave è ', sessionStorage.getItem('SessionEmail'));
                            console.log('la chiave è ', sessionStorage.getItem('SessionFullname'));
                            console.log('la chiave è ', sessionStorage.getItem('SessionTelefono'));
                            console.log('la chiave è ', sessionStorage.getItem('SessionType'));

                            this.navCtrl.setRoot(HometecnicoPage);
                        }
                    });
                });
        /*
        Controllo il candidato
         */

        console.log('Ora controllo i tecnici...');
        this.database = this.db.list('/account/cancidati/');
        console.log('Voglio effettuare l accesso con, email:', this.email, ' & password: ', criptPassword);

        this.db.list('/account/candidati/').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach( it => {
                if (it.email === this.email && it.password === criptPassword) {
                    sessionStorage.clear();
                    this.key = it.key ;
                    this.fullname = it.fullname;
                    this.email = it.email;
                    this.telefono = it.telefono;
                    localStorage.setItem('isLoggedin', 'true');
                    sessionStorage.setItem('SessionKey' , '' + it.key);
                    sessionStorage.setItem('SessionEmail' , '' + it.email);
                    sessionStorage.setItem('SessionFullname' , '' + it.fullname);
                    sessionStorage.setItem('SessionTelefono' , '' + it.telefono);
                    sessionStorage.setItem('SessionType' , 'Candidati');

                    console.log('la chiave è ', sessionStorage.getItem('SessionKey'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionEmail'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionFullname'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionTelefono'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionType'));
                    this.navCtrl.setRoot(HomecandidatoPage);
                }
            });
        });

        console.log('utente non trovato...');

        /*
        Codice di Fabio




        this.db.list('/account/tecnico/').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            console.log('Stampo tutto l oggetto items: ', items);
            items.forEach( it => {
                if (it.email === this.prova ) {
                    console.log('sono nel if');
                    this.key = it.key ;
                    localStorage.setItem('isLoggedin', 'true');
                    sessionStorage.setItem('SessionKey' , '' + it.key);
                    sessionStorage.setItem('SessionEmail' , '' + it.email);
                    sessionStorage.setItem('SessionFullname' , '' + it.fullname);
                    sessionStorage.setItem('SessionTelefono' , '' + it.telefono);

                    console.log('la chiave è ', sessionStorage.getItem('SessionKey'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionEmail'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionFullname'));
                    console.log('la chiave è ', sessionStorage.getItem('SessionTelefono'));
                }
            });
        });

        let alert = this.alertCtrl.create({
                title: 'Login',
                subTitle: 'Login riuscito!',
                buttons: ['OK']
            });
            alert.present();
            this.candidato.email = this.candidato.password = '';

            this.navCtrl.setRoot(HomecandidatoPage);
            */

    }

    onSignup() {
        this.navCtrl.push(SignupPage);
    }

    onTapInfo() {
        this.navCtrl.push(SignupPage);
    }
}