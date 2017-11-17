import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrCalloutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-callout',
  templateUrl: 'skillexr-callout.html',
})
export class SkillexrCalloutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrListofSkillsPage');
  }
  goToCreateACalloutPage(){
    this.navCtrl.push('SkillexrCreateACalloutPage');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrCalloutPage');
  }

}
