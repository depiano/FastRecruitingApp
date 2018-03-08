import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {ProfiloPage} from "../profilo/profilo";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Observable} from "rxjs/Observable";
import {Candidato} from "../../app/candidato";
import {LoginPage} from "../login/login";
import {Md5} from  '../../../node_modules/md5-typescript/Md5';

@Component({
  selector: 'page-home',
  templateUrl: 'modificaprofilo.html'
})
export class ModificaprofiloPage {

    confermaPassword : string;

    itemsRef: AngularFireList<any>;
    items: Observable<any[]>;
    key:string;
    email: string;
    fullname: string;
    telefono: string;
    candidato: Candidato;
    database;
    confpassword;
    flag;
    type: string;

  constructor(private db: AngularFireDatabase, public alertCtrl: AlertController,public navCtrl: NavController) {
      this.flag = 0;

      this.key = sessionStorage.getItem('SessionKey');
      this.email = sessionStorage.getItem('SessionEmail');
    this.fullname = sessionStorage.getItem('SessionFullname');
    this.telefono = sessionStorage.getItem('SessionTelefono');

      this.type = sessionStorage.getItem('SessionType');

    this.candidato = {fullname : '' + this.fullname,email : ''+ this.email,
        telefono : '' + this.telefono, password : ''};

    /*
    modifica qui in base alla sessione xk nn sai se è un tecnico o un candidato.
     */
    if(this.type === 'Tecnico'){
        this.database = this.db.list('/account/tecnico/');
    } else {
        this.database = this.db.list('/account/candidati/');
    }
  }
    onAnnulla() {
        this.navCtrl.push(ProfiloPage);
    }


    onSignup(confpassword: string) {
      this.confpassword = confpassword;

        if (this.candidato.telefono.length < 1) {
            console.log('Telefono non valido');
            return;
        }
        this.database.update(this.key, {telefono: this.candidato.telefono});
       if (this.candidato.password.length === 0 && this.confpassword.length === 0) {
            console.log('Error: Password e Conferma password nulle!');
            this.navCtrl.setRoot(LoginPage);
        }

        if (this.candidato.password.length !== 0 && this.confpassword.length !== 0) {
            if(this.candidato.password === this.confpassword){
               this.database.update(this.key, {password: Md5.init(this.candidato.password)});
                this.navCtrl.setRoot(LoginPage);
            }
            else{
                console.log('Impossibile aggiornare la password xk non uguali.');
            }

        }
        else {
            console.log('Impossibile aggiornare la password.');
        }

    }
}
