import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrChangePasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-change-password',
  templateUrl: 'skillexr-change-password.html',
})
export class SkillexrChangePasswordPage {
  isReadonly:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isReadonly = true
  }
  goToNext(){
    this.navCtrl.push('SkillexrChangePassword1Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrChangePasswordPage');
  }

}
