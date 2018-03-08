import {Component, OnInit} from '@angular/core';
import {NavController, NavParams, MenuController} from 'ionic-angular';



@Component({
  selector: 'page-home',
  templateUrl: 'hometecnico.html'
})
export class HometecnicoPage implements OnInit {

  constructor(public navCtrl: NavController, public navParams: NavParams,  public menuCtrl: MenuController) {
      this.enabledAuthenticatedMenu();
  }

    ngOnInit(): void {
    }

enabledAuthenticatedMenu(){
    this.menuCtrl.enable(false, 'candidato');
    this.menuCtrl.enable(true, 'tecnico');
}

}
