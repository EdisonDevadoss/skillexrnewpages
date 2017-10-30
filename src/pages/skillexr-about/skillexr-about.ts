import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrAboutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-about',
  templateUrl: 'skillexr-about.html',
})
export class SkillexrAboutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrContactPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrAboutPage');
  }

}
