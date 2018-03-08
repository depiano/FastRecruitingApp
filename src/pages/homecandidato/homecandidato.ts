import {Component, OnInit} from '@angular/core';
import {MenuController, NavController, NavParams} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'homecandidato.html'
})
export class HomecandidatoPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams, public menuCtrl: MenuController) {
      console.log(sessionStorage.getItem('SessionKey'));
      this.enabledAuthenticatedMenu();

  }
    ngOnInit(): void {
    }

    enabledAuthenticatedMenu(){
    this.menuCtrl.enable(true, 'candidato');
    this.menuCtrl.enable(false, 'tecnico');
    }

}
