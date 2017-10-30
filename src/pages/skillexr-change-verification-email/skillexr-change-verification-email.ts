import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrChangeVerificationEmailPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-change-verification-email',
  templateUrl: 'skillexr-change-verification-email.html',
})
export class SkillexrChangeVerificationEmailPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNextVerificationEmail(){
    this.navCtrl.push('SkillexrChangeVerificationEmail1Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrChangeVerificationEmailPage');
  }

}
