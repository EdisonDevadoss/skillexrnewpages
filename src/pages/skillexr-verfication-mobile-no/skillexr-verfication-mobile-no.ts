import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrVerficationMobileNoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-verfication-mobile-no',
  templateUrl: 'skillexr-verfication-mobile-no.html',
})
export class SkillexrVerficationMobileNoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goTo(){
    this.navCtrl.push('SkillexrSoundSettingsPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrVerficationMobileNoPage');
  }

}
