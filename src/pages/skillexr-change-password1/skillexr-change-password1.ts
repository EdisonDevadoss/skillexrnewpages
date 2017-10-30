import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrChangePassword1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-change-password1',
  templateUrl: 'skillexr-change-password1.html',
})
export class SkillexrChangePassword1Page {
  isReadonly: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isReadonly = true;
  }
  goToNext(){
    this.navCtrl.push('SkillexrChangePassword2Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrChangePassword1Page');
  }

}
