import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrListofSkillsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-listof-skills',
  templateUrl: 'skillexr-listof-skills.html',
})
export class SkillexrListofSkillsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrReachPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrListofSkillsPage');
  }

}
