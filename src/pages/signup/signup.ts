import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {LoginPage} from "../login/login";
import {AuthService} from "../../app/auth.service";
import {AngularFireDatabase} from "angularfire2/database";
import { Md5 } from '../../../node_modules/md5-typescript/Md5';

@Component({
  selector: 'page-user',
  templateUrl: 'signup.html'
})
export class SignupPage {
    candidato = {fullname : '',email : '', telefono : '', password : ''};
    confermaPassword = '';
    database;
    flag= false;
    memorizzato= false;


    constructor(private db: AngularFireDatabase, public authService: AuthService, public navCtrl: NavController, public alertCtrl: AlertController) {
        this.database = this.db.list('/account/candidati');

  }






    onControlData() {
        this.flag = false;
      if(this.candidato.password === '' || this.candidato.email === '' || this.candidato.password ==='' ||
      this.candidato.telefono === '' || this.confermaPassword === '') {
          let campivuoti = this.alertCtrl.create({
              title: 'Campi vuoti',
              subTitle: 'Riempire tutti i campi',
              buttons: ['OK']
          });
         campivuoti.present();

      }
      else {

          this.database.valueChanges().forEach(el => {
              el.forEach(element => {
                  if (element.email === this.candidato.email ) {
                      this.flag = true;
                      let emailEsistente = this.alertCtrl.create({
                          title: 'Utente esistente',
                          subTitle: 'Email già esistente,  inserire una nuova email ',
                          buttons: ['OK']
                      });
                      if(this.memorizzato === false){
                      emailEsistente.present();
                      }


                  }
              });

              console.log(this.flag);

              if (this.flag === false) {
                  this.onSignup(this.confermaPassword);
              }

          });
      }
    }


    onSignup( repeatpassword: string ) {
        const md5password = Md5.init(this.candidato.password);
        const md5repeatpassword = Md5.init(repeatpassword);
        if (md5password !== md5repeatpassword ) {
            let passDiverse = this.alertCtrl.create({
                title: 'Password Diverse',
                subTitle: 'Le due password inserite non corrispondono ',
                buttons: ['OK']
            });
            passDiverse.present();


        }
        else {
            const saveData = {
                fullname: this.candidato.fullname,
                email: this.candidato.email, telefono: this.candidato.telefono, password: md5password
            };
            console.log(saveData);
            this.database.push(saveData);
            console.log('Utente salvato');
            this.memorizzato=true;
            this.navCtrl.setRoot(LoginPage);
        }

    }


    onAnnulla() {
        this.navCtrl.push(LoginPage);
    }




}
