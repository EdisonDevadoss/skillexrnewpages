import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrAccountSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-account-settings',
  templateUrl: 'skillexr-account-settings.html',
})
export class SkillexrAccountSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToChangePassword(){
    this.navCtrl.push('SkillexrChangePasswordPage');
  }
  goToMobileVerification(){
    this.navCtrl.push('SkillexrMobileNoVerificationPage');
  }
  goToEmailVerification(){
    this.navCtrl.push('SkillexrChangeVerificationEmailPage');
  }
  goToDeactiveAccount(){
    this.navCtrl.push('SkillexrDeactiveAccountPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrAccountSettingsPage');
  }

}
