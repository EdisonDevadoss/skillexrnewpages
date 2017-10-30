import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-notification',
  templateUrl: 'skillexr-notification.html',
})
export class SkillexrNotificationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrBlockedListPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrNotificationPage');
  }

}
