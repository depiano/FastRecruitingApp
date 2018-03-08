import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ModificaprofiloPage} from "../modificaprofilo/modificaprofilo";

@Component({
  selector: 'page-home',
  templateUrl: 'profilo.html'
})
export class ProfiloPage {
  fullname: string;
  email: string;
  telefono: string;

  constructor(public navCtrl: NavController) {
      this.fullname=sessionStorage.getItem('SessionFullname');
      this.email=sessionStorage.getItem('SessionEmail');
      this.telefono=sessionStorage.getItem('SessionTelefono');

  }
    onSignup() {
        this.navCtrl.push(ModificaprofiloPage);
    }

}
