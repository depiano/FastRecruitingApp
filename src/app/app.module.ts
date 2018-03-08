import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomecandidatoPage } from '../pages/homecandidato/homecandidato';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {VisualizzaoffertaPage} from "../pages/visualizzaofferta/visualizzaofferta";
import {CandidaturaoffertaPage} from "../pages/candidaturaofferta/candidaturaofferta";
import {VisualizzacolloquioPage} from "../pages/visualizzacolloquio/visualizzacolloquio";
import {HometecnicoPage} from "../pages/hometecnico/hometecnico";
import {ProfiloPage} from "../pages/profilo/profilo";
import {ModificaprofiloPage} from "../pages/modificaprofilo/modificaprofilo";
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {VisualizzacandidaturePage} from "../pages/visualizzacandidature/visualizzacandidature";
import {TutorialPage} from "../pages/tutorial/tutorial";
import {VisualizzacandidatoPage} from "../pages/visualizzacandidato/visualizzacandidato";
import {MappaPage} from "../pages/mappa/mappa";
import {VisualizzaoffertatecnicoPage} from "../pages/visualizzaoffertatecnico/visualizzaoffertatecnico";


import { HttpModule} from "@angular/http";
import { AngularFireDatabaseModule} from "angularfire2/database";
import {AngularFireModule} from "angularfire2";
import {InviocandidaturaComponent} from "../components/inviocandidatura/inviocandidatura";
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthService } from './auth.service';

import {CandidaturaidoneaComponent} from "../components/candidaturaidonea/candidaturaidonea";
import {OffertaComponent} from "../components/offerta/offerta";
import {CandidatoComponent} from "../components/candidato/candidato";
import {DettaglioffertaComponent} from "../components/dettagliofferta/dettagliofferta";
import {DettagliocandidatoComponent} from "../components/dettagliocandidato/dettagliocandidato";
import {ColloquioComponent} from "../components/colloquio/colloquio";
import {CandidaturanonidoneaComponent} from "../components/candidaturanonidonea/candidaturanonidonea";
import {CandidaturadaverificareComponent} from "../components/candidaturadaverificare/candidaturadaverificare";
import { DataProvider } from '../providers/data/data';

import {Camera} from "@ionic-native/camera";
import {CandidaturadaanalizzareComponent} from "../components/candidaturadaanalizzare/candidaturadaanalizzare";


const firebaseConfig = {
    /*

           apiKey: "AIzaSyDr-dQ8Rp8dAtxhSJc7GDdGU1Joo_MKTZ4",
           authDomain: "fastrecruiting-c6284.firebaseapp.com",
           databaseURL: "https://fastrecruiting-c6284.firebaseio.com",
           projectId: "fastrecruiting-c6284",
           storageBucket: "fastrecruiting-c6284.appspot.com",
           messagSende: "576205137004"
     /*   /*




       Vincenzo
           *//**/
    apiKey: "AIzaSyChpAAH_WYI7V0MtKp3ftq73hSOHRu3qvA",
    authDomain: "esempio-51c44.firebaseapp.com",
    databaseURL: "https://esempio-51c44.firebaseio.com",
    projectId: "esempio-51c44",
    storageBucket: "esempio-51c44.appspot.com",
    messagingSenderId: "607459468007"

    /*
    Antonio

    apiKey: 'AIzaSyBgcJbiUdjWzlyZPKwNbyT6cbBTDCiV1b0',
    authDomain: 'fastrecruiter-69397.firebaseapp.com',
    databaseURL: 'https://fastrecruiter-69397.firebaseio.com',
    projectId: 'fastrecruiter-69397',
    storageBucket: 'fastrecruiter-69397.appspot.com',
    messagingSenderId: '833801141202'
    */
};

@NgModule({
  declarations: [
    MyApp,
      HomecandidatoPage,
      VisualizzaoffertaPage,
      CandidaturaoffertaPage,
      VisualizzacolloquioPage,
      HometecnicoPage,
      ProfiloPage,
      ModificaprofiloPage,
      LoginPage,
      SignupPage,
      VisualizzacandidaturePage,
      TutorialPage,
      VisualizzacandidatoPage,
      MappaPage,
      VisualizzaoffertatecnicoPage,
      OffertaComponent,
      CandidatoComponent,
      DettaglioffertaComponent,
      DettagliocandidatoComponent,
      InviocandidaturaComponent,
      CandidatoComponent,
      CandidaturaidoneaComponent,
      CandidaturanonidoneaComponent,
      CandidaturadaverificareComponent,
      ColloquioComponent,
      CandidaturadaanalizzareComponent

  ],
  imports: [
    BrowserModule,
      HttpModule,
      AngularFireDatabaseModule,
      AngularFireModule.initializeApp(firebaseConfig),
    IonicModule.forRoot(MyApp),
      AngularFireAuthModule],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
      HomecandidatoPage,
      VisualizzaoffertaPage,
      CandidaturaoffertaPage,
      VisualizzacolloquioPage,
      HometecnicoPage,
      ProfiloPage,
      ModificaprofiloPage,
      LoginPage,
      SignupPage,
      VisualizzacandidaturePage,
      TutorialPage,
      VisualizzacandidatoPage,
      MappaPage,
      VisualizzaoffertatecnicoPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
      AuthService,
      Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    DataProvider,
  ]
})
export class AppModule {}

