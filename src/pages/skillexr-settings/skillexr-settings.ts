import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-settings',
  templateUrl: 'skillexr-settings.html',
})
export class SkillexrSettingsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  accountSettings(){
    this.navCtrl.push('SkillexrAccountSettingsPage');
  }
  blockListPage(){
    this.navCtrl.push('SkillexrBlockedListPage');
  }
  faqPage(){
    this.navCtrl.push('SkillexrFaqPage');
  }
  gotoTermsCondition(){
    this.navCtrl.push('SkillexrTermsOfServicePage')
  }
  gotoPrivacyPolicy(){
    this.navCtrl.push('SkillexrPrivacyPolicyPage');
  }
  soundSetting(){
    this.navCtrl.push('SkillexrSoundSettingsPage');
  }
  goToContactPage(){
    this.navCtrl.push('SkillexrContactUsPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrSettingsPage');
  }

}
