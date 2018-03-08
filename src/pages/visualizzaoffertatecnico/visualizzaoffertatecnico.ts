import {Component} from '@angular/core';
import {NavController, NavParams} from 'ionic-angular';
import {Skill} from "../../app/skill";
import {AngularFireDatabase, AngularFireObject} from "angularfire2/database";
import {Offerta} from "../../app/offerta";

@Component({
  selector: 'page-home',
  templateUrl: 'visualizzaoffertatecnico.html'
})
export class VisualizzaoffertatecnicoPage {
    offertaselezionata:Offerta;
    chiave : string;
    i=0;
    itemRef: AngularFireObject<any>;


    titolo: string;
    database;
    skill: Skill={nome:''};
    listSkill: Array<any>=[];
    listofferta: Array<any>=[];

  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
      this.chiave = this.navParams.get('idOfferta');
      this.offertaselezionata = new Offerta('','','','','','');

      this.database = this.db.list('offertedilavoro/' + this.chiave + '/skill/');
      this.database.valueChanges().forEach(el => {
          el.forEach(element => {
              this.skill = new Skill(element);
              this.listSkill.push(this.skill);
              console.log(this.listSkill);

          })
      })

      this.db.list('/offertedilavoro/').snapshotChanges().map(actions => {
          return actions.map(action => ({key: action.key, ...action.payload.val()}));
      }).subscribe(items => {
          items.forEach(it => {
            if (it.key === this.chiave) {


                this.offertaselezionata = new Offerta(it.titolo, it.luogodilavoro, it.skill, it.annuncio, it.titolodistudio, it.key);
                console.log('ciaooooo ', this.offertaselezionata);
            }
          })
      })
  }



}
