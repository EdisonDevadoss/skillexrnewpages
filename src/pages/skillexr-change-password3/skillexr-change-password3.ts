import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrChangePassword3Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-change-password3',
  templateUrl: 'skillexr-change-password3.html',
})
export class SkillexrChangePassword3Page {
  isReadonly: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isReadonly = true;
  }
  goToNext(){
    this.navCtrl.push('SkillexrChangeVerificationEmailPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrChangePassword3Page');
  }

}
