import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomecandidatoPage } from '../pages/homecandidato/homecandidato';
import {HometecnicoPage} from "../pages/hometecnico/hometecnico";
import {ProfiloPage} from "../pages/profilo/profilo";
import {LoginPage} from "../pages/login/login";
import {SignupPage} from "../pages/signup/signup";
import {VisualizzacandidaturePage} from "../pages/visualizzacandidature/visualizzacandidature";
import {TutorialPage} from "../pages/tutorial/tutorial";


@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = TutorialPage;
    fullname: string;
    email: string;
    telefono: string;

  pagesCandidato: Array<{title: string, component: any, icon: string}>;
    pagesTecnico: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();
      this.fullname=sessionStorage.getItem('SessionFullname');
      this.email=sessionStorage.getItem('SessionEmail');
      this.telefono=sessionStorage.getItem('SessionTelefono');

    // used for an example of ngFor and navigation
    this.pagesCandidato = [
        { title: 'Home', component: HomecandidatoPage, icon: 'home' },
        { title: 'Profilo', component: ProfiloPage, icon: 'person' },
        { title: 'Candidature', component: VisualizzacandidaturePage, icon: 'briefcase' },
        { title: 'Logout', component: LoginPage, icon: 'play' }
        ];

      this.pagesTecnico = [
          { title: 'Home', component: HometecnicoPage, icon: 'home' },
          { title: 'Profilo', component: ProfiloPage, icon: 'person' },
          { title: 'Logout', component: LoginPage, icon: 'play' }
      ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
      this.fullname=sessionStorage.getItem('SessionFullname');
      this.email=sessionStorage.getItem('SessionEmail');
      this.telefono=sessionStorage.getItem('SessionTelefono');
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
