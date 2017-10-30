import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrMobileNoVerificationCodePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-mobile-no-verification-code',
  templateUrl: 'skillexr-mobile-no-verification-code.html',
})
export class SkillexrMobileNoVerificationCodePage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrBlockReportPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrMobileNoVerificationCodePage');
  }

}
