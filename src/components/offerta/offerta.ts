import {Component} from '@angular/core';
import {Offerta} from "../../app/offerta";
import {VisualizzaoffertaPage} from "../../pages/visualizzaofferta/visualizzaofferta";
import {NavController, NavParams} from "ionic-angular";
import { AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'offerta',
  templateUrl: 'offerta.html'
})
export class OffertaComponent {
    public jobsofferlist: Array<any> = [];

    public ob;
    database;
    public offertaselezionata;
    o: Offerta;
    fullname:string;
    s:string;
    newItem = '';
    titolo:string;


    constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
        this.fullname = sessionStorage.getItem('SessionKey');


        this.db.list('/offertedilavoro/').snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach(it => {
                this.ob = new Offerta(it.titolo, it.luogodilavoro, it.skill, it.annuncio, it.titolodistudio, it.key);
                this.jobsofferlist.push(this.ob);
            })
        })
    }
    selezione(o: Offerta, chiave:string, titolo:string) {
        sessionStorage.setItem('SessionOffertaKey' , '' + o.key);
        sessionStorage.setItem('SessionOffertaTitolo' , '' + o.titolo);
        this.offertaselezionata=o;
        this.navCtrl.push(VisualizzaoffertaPage,{offertaselezionata: this.offertaselezionata});
    }


}
