import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrMobileNoVerificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-mobile-no-verification',
  templateUrl: 'skillexr-mobile-no-verification.html',
})
export class SkillexrMobileNoVerificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToVerificationCode(){
    this.navCtrl.push('SkillexrMobileNoVerificationCodePage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrMobileNoVerificationPage');
  }

}
