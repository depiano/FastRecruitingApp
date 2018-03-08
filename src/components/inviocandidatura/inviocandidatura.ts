import {Component, Input} from '@angular/core';
import {VisualizzaoffertaPage} from "../../pages/visualizzaofferta/visualizzaofferta";
import {HomecandidatoPage} from "../../pages/homecandidato/homecandidato";
import {AlertController, NavController, NavParams} from "ionic-angular";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase, AngularFireList} from "angularfire2/database";
import {Offerta} from "../../app/offerta";
import {Candidatura} from "../../app/candidatura";
import {Skill} from "../../app/skill";

import { Camera, CameraOptions } from '@ionic-native/camera';
import firebase from 'firebase';

@Component({
  selector: 'inviocandidatura',
  templateUrl: 'inviocandidatura.html'
})
export class InviocandidaturaComponent {
    @Input() offertaselezionata: Offerta;
    itemsRef: AngularFireList<any>;
    skill: Skill={nome:''};
    listSkill: Array<any>=[];
    items: Observable<any[]>;
    chiave : string;
    titolo: string;
    database;
    today=Date.now();
    candidatura: Candidatura;
    image;
    filename;
    captureDataUrl: string;
    caricato: string;
    captureDataUrl1: string;
    caricato1: string;
    image1;
    filename1;


    dt;
    day;
    month;
    year;
    data;
    count;


    constructor(public camera:Camera, private db: AngularFireDatabase, public alertCtrl: AlertController, public navCtrl: NavController, public navParams: NavParams) {
        this.count=1;
        this.candidatura = new Candidatura('' , '', '', '', '', '', '', '',
            '', '', '', '', '', '',
            '', '', '' , '','');
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
        this.navCtrl.push(VisualizzaoffertaPage);
    }

    onTapCandidati() {
        this.candidatura.id_candidato= sessionStorage.getItem('SessionKey');
        this.candidatura.fullnameCandidato = sessionStorage.getItem('SessionFullname');
        this.candidatura.titoloOfferta=sessionStorage.getItem('SessionOffertaTitolo');
        this.candidatura.id_offerta=sessionStorage.getItem('SessionOffertaKey');

        this.dt = new Date();
        this.day = this.dt.getDate();
        this.month = this.dt.getMonth() + 1;
        this.year = this.dt.getFullYear();
        this.data = this.day+'/'+this.month+'/'+this.year;

        this.candidatura.data = this.data;

        console.log(this.image, ' oggetto candidatura: ',this.candidatura);


        let alert = this.alertCtrl.create({
            title: 'Candidatura effettuata',
            subTitle: 'La tua richiesta di candidaturaidonea è stata inviata con successo!',
            buttons: ['OK']
        });
        alert.present();

        this.itemsRef = this.db.list('/candidature/candidature_da_analizzare');
        this.candidatura.chiave = this.itemsRef.push(this.candidatura).key;
        this.database=this.db.list('candidature/candidature_da_analizzare/');
        this.database.update(this.candidatura.chiave, {chiave : this.candidatura.chiave});
        this.navCtrl.setRoot(HomecandidatoPage);
    }


    getPicture(sourceType){
        const cameraOptions: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType
        };

        this.camera.getPicture(cameraOptions)
            .then((captureDataUrl) => {
                this.captureDataUrl = 'data:image/jpeg;base64,' + captureDataUrl;
                console.log('captureDataUrl cosa è ? ', captureDataUrl)
            }, (err) => {
                console.log(err);
            });
    }
    calcola(){
        var storageRef1 = firebase.storage().ref().child('/images/'+this.filename+'.jpg');
        storageRef1.getDownloadURL().then(url => {
            this.image=url;
            console.log(this.image);
            this.candidatura.cv=this.image;
            let alert = this.alertCtrl.create({
                title: 'Caricato!',
                subTitle: 'CV',
                buttons: ['OK']
            });
            alert.present();
        });
        this.caricato="";
    }

    upload() {
        let storageRef = firebase.storage().ref();
        // Create a timestamp as filename
        this.filename = Math.floor(Date.now() / 1000);

        // Create a reference to 'images/todays-date.jpg'
        const imageRef = storageRef.child('images/'+this.filename+'.jpg');

        imageRef.putString(this.captureDataUrl, firebase.storage.StringFormat.DATA_URL)
            .then((snapshot)=> {
                // Do something here when the data is succesfully uploaded!
                this.showSuccesfulUploadAlert();
            });
        this.caricato="caricato";
    }

    showSuccesfulUploadAlert() {
        let alert = this.alertCtrl.create({
            title: 'Uploaded!',
            subTitle: 'Picture is uploaded to Firebase',
            buttons: ['OK']
        });
        alert.present();
        // clear the previous photo data in the variable
        this.captureDataUrl = "";
        this.captureDataUrl1 = "";

    }








    getPicture1(sourceType){
        const cameraOptions: CameraOptions = {
            quality: 50,
            destinationType: this.camera.DestinationType.DATA_URL,
            encodingType: this.camera.EncodingType.JPEG,
            mediaType: this.camera.MediaType.PICTURE,
            sourceType: sourceType
        };

        this.camera.getPicture(cameraOptions)
            .then((captureDataUrl1) => {
                this.captureDataUrl1 = 'data:image/jpeg;base64,' + captureDataUrl1;
                console.log('captureDataUrl cosa è ? ', captureDataUrl1)
            }, (err) => {
                console.log(err);
            });
    }
    calcola1(){
        var storageRef2 = firebase.storage().ref().child('/images/'+this.filename1+'.jpg');
        storageRef2.getDownloadURL().then(url => {
            this.image1=url;
            console.log(this.image1);
            this.candidatura.lett_presentazione=this.image1;
            let alert = this.alertCtrl.create({
                title: 'Caricata!',
                subTitle: 'Lettera di presentazione',
                buttons: ['OK']
            });
            alert.present();
        });
        this.caricato1="";
    }

    upload1() {
        let storageRef2 = firebase.storage().ref();
        // Create a timestamp as filename
        this.filename1 = Math.floor(Date.now() / 1000);
        // Create a reference to 'images/todays-date.jpg'
        const imageRef1 = storageRef2.child('images/'+this.filename1+'.jpg');

        imageRef1.putString(this.captureDataUrl1, firebase.storage.StringFormat.DATA_URL)
            .then((snapshot)=> {
                // Do something here when the data is succesfully uploaded!
                this.showSuccesfulUploadAlert();
            });
        this.caricato1="caricato";
    }


}
