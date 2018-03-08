import {Component, Input} from '@angular/core';
import {Candidatura} from "../../app/candidatura";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {Skill} from "../../app/skill";
import {VisualizzaoffertatecnicoPage} from "../../pages/visualizzaoffertatecnico/visualizzaoffertatecnico";
import {HometecnicoPage} from "../../pages/hometecnico/hometecnico";
import {FirebaseApp} from "angularfire2";

/**
 * Generated class for the DettagliocandidatoComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'dettagliocandidato',
  templateUrl: 'dettagliocandidato.html'
})
export class DettagliocandidatoComponent {
    @Input() candidaturaselezionata: Candidatura;
    chiaveOfferta:string;
    c:Candidatura;
    chiaveCandidatura:string;
    database;
    fff;
    ref;
    giudizio;
    noteTecnico;
    id_offerta='';
    skill: Skill={nome:''};
    listSkill: Array<any>=[];
    itemsRef: AngularFireList<any>;


  constructor(public alertCtrl: AlertController,private db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams, private f:FirebaseApp) {
this.noteTecnico='';
   this.giudizio='';
   this.fff=f;
      this.chiaveCandidatura = sessionStorage.getItem('SessionCandidaturaKey');
      console.log('caaaaaaaaaaaaaazzzzzzzzzzzzz',this.chiaveCandidatura);





    console.log(this.c);

      this.database=this.db.list('candidature/candidature_da_verificare/'+this.chiaveCandidatura+'/skill/');
      this.database.valueChanges().forEach(el => {
          el.forEach(element => {
              this.skill=new Skill(element);
              this.listSkill.push(this.skill);
              console.log(this.listSkill);

          })
      })
this.searchOfferta();
  }

    onVisualizzaOfferta() {
        this.navCtrl.push(VisualizzaoffertatecnicoPage,{idOfferta:this.id_offerta});
    }

    public searchOfferta() {

        this.ref = this.fff.database().ref('candidature/candidature_da_verificare/'+this.chiaveCandidatura);
        this.ref.once('value', snapshot => {
            snapshot.forEach(value => {
                if (value.key === 'id_offerta') {
                    this.id_offerta=value.val();
                console.log('ID OFFERTA '+ this.id_offerta);
                }

            });
        });
    }



    onInvia() {
        this.itemsRef = this.db.list('/candidature/candidature_da_verificare/');
        console.log('giudizio '+this.giudizio);
        console.log('nota '+this.noteTecnico);
        this.itemsRef.update(this.chiaveCandidatura, {giudizio: this.giudizio, note_tecnico:this.noteTecnico});

        let alert = this.alertCtrl.create({
            title: 'Giudizio inviato',
            subTitle: 'Il giudizio è stato inviato al Recruiter con successo!',
            buttons: ['OK']
        });
        alert.present();
        this.navCtrl.push(HometecnicoPage);
    }

    onAnnulla() {
        this.navCtrl.push(HometecnicoPage);
    }
}
