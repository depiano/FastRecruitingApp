import {Component} from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {VisualizzacandidatoPage} from "../../pages/visualizzacandidato/visualizzacandidato";
import {AngularFireDatabase} from "angularfire2/database";
import {Candidatura} from "../../app/candidatura";

/**
 * Generated class for the CandidatoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'candidato',
  templateUrl: 'candidato.html'
})
export class CandidatoComponent{
    public candidaturaselezionata;
    public candidatilist: Array<any> = [];
    public candidatura;
    database;
    chiave:string;
    chiaveCandidatura:string;


  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
      this.chiave = sessionStorage.getItem('SessionKey');
        console.log(this.chiave);
      this.db.list('/candidature/candidature_da_verificare/', ref => ref.orderByChild('id_tecnico').equalTo(this.chiave)).snapshotChanges().map(actions => {
          return actions.map(action => ({ key: action.key, ...action.payload.val() }));
      }).subscribe(items => {
          items.forEach(it => {
              if(it.giudizio === '') {
                  this.candidatura = new Candidatura(it.fullnameCandidato, it.cv, it.data_colloquio, it.google_maps,
                      it.id_candidato, it.id_offerta, it.id_tecnico, it.lett_presentazione, it.luogo_colloquio,
                      it.note, it.note_recruiter, it.note_tecnico, it.orario_colloquio, it.skill,
                      it.titoloOfferta, it.titolodistudio, it.data, it.giudizio, it.key);
                  this.candidatilist.push(this.candidatura);
                  console.log(this.candidatura);
              }
          })
      })
  }

    selezione(candidatura: Candidatura) {
        this.candidaturaselezionata=candidatura;
        console.log('chiave: ', candidatura.chiave);
        this.chiaveCandidatura=candidatura.chiave;
        sessionStorage.setItem('SessionCandidaturaKey' , this.chiaveCandidatura);


        this.navCtrl.push(VisualizzacandidatoPage,{candidaturaselezionata: this.candidaturaselezionata});
    }
}
