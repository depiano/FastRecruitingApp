import {Component, ViewChild} from '@angular/core';
import {NavController, Slides} from 'ionic-angular';
import {LoginPage} from "../login/login";

@Component({
  selector: 'page-tutorial',
  templateUrl: 'tutorial.html'
})
export class TutorialPage {
    showSkip = true;

    @ViewChild('slides') slides: Slides;

  constructor(public navCtrl: NavController) {

  }
    startApp() {
        this.navCtrl.push(LoginPage);
    }

    onSlideChangeStart(slider: Slides) {
        this.showSkip = !slider.isEnd();
    }

    ionViewWillEnter() {
        this.slides.update();
    }



}
