import { Component } from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Offerta} from "../../app/offerta";

@Component({
  selector: 'page-home',
  templateUrl: 'candidaturaofferta.html'
})
export class CandidaturaoffertaPage {
    offertaselezionata:Offerta;

    constructor(public navCtrl: NavController,navParams: NavParams) {
        this.offertaselezionata=navParams.get("offertaselezionata");

  }



}
