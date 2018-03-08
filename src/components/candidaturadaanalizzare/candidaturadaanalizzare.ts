import { Component } from '@angular/core';
import {NavController, NavParams} from "ionic-angular";
import {AngularFireDatabase} from "angularfire2/database";
import {Candidatura} from "../../app/candidatura";
import {VisualizzacolloquioPage} from "../../pages/visualizzacolloquio/visualizzacolloquio";

/**
 * Generated class for the CandidaturadaanalizzareComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'candidaturadaanalizzare',
  templateUrl: 'candidaturadaanalizzare.html'
})
export class CandidaturadaanalizzareComponent {
    candidaturaselezionata: Candidatura;
    public candidaturalist: Array<any> = [];
    public candidatura;
    database;
    chiave:string;
    keyUtente: string;



    constructor(private db: AngularFireDatabase, public navCtrl: NavController,public navParams: NavParams) {
        this.keyUtente=sessionStorage.getItem('SessionKey');
        this.db.list('/candidature/candidature_da_analizzare', ref => ref.orderByChild('id_candidato').equalTo(this.keyUtente)).snapshotChanges().map(actions => {
            return actions.map(action => ({ key: action.key, ...action.payload.val() }));
        }).subscribe(items => {
            items.forEach(it => {
                this.candidatura = new Candidatura(it.fullnameCandidato, it.cv, it.data_colloquio, it.google_maps,
                    it.id_candidato, it.id_offerta, it.id_tecnico, it.lett_presentazione,  it.luogo_colloquio,
                    it.note,it.note_recruiter,it.note_tecnico, it.orario_colloquio,it.skill,
                    it.titoloOfferta, it.titolodistudio, it.data, it.giudizio,it.key);
                this.candidaturalist.push(this.candidatura);

            })
        });
    }


    selezione(c: Candidatura, chiave:string) {
        this.candidaturaselezionata=c;
        this.chiave=chiave;
        this.navCtrl.push(VisualizzacolloquioPage,{candidaturaselezionata: this.candidaturaselezionata , chiave: this.chiave});
    }




}