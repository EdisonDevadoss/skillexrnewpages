import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrReachPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-reach',
  templateUrl: 'skillexr-reach.html',
})
export class SkillexrReachPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrNotificationPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrReachPage');
  }

}
