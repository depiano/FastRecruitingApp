import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Candidatura} from "../../app/candidatura";

@Component({
  selector: 'page-home',
  templateUrl: 'visualizzacolloquio.html'
})
export class VisualizzacolloquioPage {
    candidaturaselezionata:Candidatura;

  constructor(public navCtrl: NavController,navParams: NavParams) {
      this.candidaturaselezionata=navParams.get("candidaturaselezionata");


  }

}
