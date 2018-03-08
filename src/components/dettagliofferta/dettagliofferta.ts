import {Component, Input} from '@angular/core';
import {Offerta} from "../../app/offerta";
import {HomecandidatoPage} from "../../pages/homecandidato/homecandidato";
import {CandidaturaoffertaPage} from "../../pages/candidaturaofferta/candidaturaofferta";
import {NavController, NavParams} from "ionic-angular";
import {Skill} from "../../app/skill";
import {AngularFireDatabase} from "angularfire2/database";


@Component({
  selector: 'dettagliofferta',
  templateUrl: 'dettagliofferta.html'
})
export class DettaglioffertaComponent {
  @Input() offertaselezionata: Offerta;
chiave : string;
i=0;

titolo: string;
database;
    skill: Skill={nome:''};
    listSkill: Array<any>=[];

  constructor(private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
      this.chiave=sessionStorage.getItem('SessionOffertaKey');

      this.database=this.db.list('offertedilavoro/'+this.chiave+'/skill/');
      this.database.valueChanges().forEach(el => {
          el.forEach(element => {
              this.skill=new Skill(element);
              this.listSkill.push(this.skill);

          })
      })


  }

    onTapAnnulla() {
        this.navCtrl.push(HomecandidatoPage);
    }

    onTapCandidati() {
        this.navCtrl.push(CandidaturaoffertaPage,{offertaselezionata: this.offertaselezionata});
    }


}
