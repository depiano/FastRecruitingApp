import { Component } from '@angular/core';
import {AlertController, NavController, NavParams} from 'ionic-angular';

import {Candidatura} from "../../app/candidatura";

@Component({
  selector: 'page-home',
  templateUrl: 'visualizzacandidato.html'
})
export class VisualizzacandidatoPage {
    candidaturaselezionata:Candidatura;

  constructor(public navCtrl: NavController, public alertCtrl: AlertController, public navParams: NavParams) {
      this.candidaturaselezionata=navParams.get("candidaturaselezionata");
        console.log('siamo nella pagina', this.candidaturaselezionata);
  }


}
