import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrChangeVerificationEmail1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-change-verification-email1',
  templateUrl: 'skillexr-change-verification-email1.html',
})
export class SkillexrChangeVerificationEmail1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrMobileNoVerificationPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrChangeVerificationEmail1Page');
  }

}
