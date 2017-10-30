import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrLocationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-location',
  templateUrl: 'skillexr-location.html',
})
export class SkillexrLocationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrDeactiveAccountPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrLocationPage');
  }

}
