import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-contact',
  templateUrl: 'skillexr-contact.html',
})
export class SkillexrContactPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrLocationPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrContactPage');
  }

}
