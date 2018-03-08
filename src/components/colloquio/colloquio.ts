import {Component, Input} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {Candidatura} from "../../app/candidatura";
import {MappaPage} from "../../pages/mappa/mappa";
import {AngularFireDatabase} from "angularfire2/database";
import {Offerta} from "../../app/offerta";
import {Skill} from "../../app/skill";

/**
 * Generated class for the ColloquioComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'colloquio',
  templateUrl: 'colloquio.html'
})
export class ColloquioComponent {
    @Input() candidaturaselezionata: Candidatura;
alert= true;
    chiave : string;
    offertadilavoro: Offerta;
    public skill: Skill ={nome: ''}
    public list: Array<any> = [];



    constructor(public navCtrl: NavController, public navParams: NavParams, private db: AngularFireDatabase) {
        this.alert= true;
        this.chiave = this.navParams.get('chiave');
        this.candidaturaselezionata = this.navParams.get('candidaturaselezionata');
        this.offertadilavoro= new Offerta ("","","","","","");

        if(this.candidaturaselezionata.data_colloquio === ''){
            this.alert=false;
        }
        this.db.list('/offertedilavoro').snapshotChanges().map(actions => {
            return actions.map(action => ({key: action.key, ...action.payload.val()}));
        }).subscribe(items => {
            items.forEach(it => {

                if (this.candidaturaselezionata.id_offerta === it.key) {
                    console.log('stampo it - nel if: ', it);
                    this.offertadilavoro.titolo = it.titolo;
                    this.offertadilavoro.annuncio = it.annuncio;
                    this.skill = new Skill(it.skill);
                    this.list.push(this.skill);
                    this.offertadilavoro.titolodistudio = it.titolodistudio;
                    this.offertadilavoro.luogodilavoro = it.luogodilavoro;

                }
            });
        });
        console.log('alert: ', this.alert);
    }
    onTapAprimappa() {
        this.navCtrl.push(MappaPage);
    }
}


