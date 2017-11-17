import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrProfileEditPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-profile-edit',
  templateUrl: 'skillexr-profile-edit.html',
})
export class SkillexrProfileEditPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrProfileCalloutPage');
  }
  goToBlockPage(){
    this.navCtrl.push('SkillexrBlockReportPage');
  }
  goToReachPage(){
    this.navCtrl.push('SkillexrReachPage')
  }
  goToMobileVerification(){
    this.navCtrl.push('SkillexrMobileNoVerificationPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrProfileEditPage');
  }

}
