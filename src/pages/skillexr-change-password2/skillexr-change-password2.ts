import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrChangePassword2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-change-password2',
  templateUrl: 'skillexr-change-password2.html',
})
export class SkillexrChangePassword2Page {
  isReadonly: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isReadonly = true;
  }
  goToNext(){
    this.navCtrl.push('SkillexrChangePassword3Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrChangePassword2Page');
  }

}
