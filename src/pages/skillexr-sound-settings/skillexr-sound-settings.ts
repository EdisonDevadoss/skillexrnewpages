import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrSoundSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-sound-settings',
  templateUrl: 'skillexr-sound-settings.html',
})
export class SkillexrSoundSettingsPage {
  isReadonly:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isReadonly = true;
  }
  goToNext(){
    this.navCtrl.push('SkillexrAboutPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrSoundSettingsPage');
  }

}
