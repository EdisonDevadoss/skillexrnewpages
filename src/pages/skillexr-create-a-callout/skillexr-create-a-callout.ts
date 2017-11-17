import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrCreateACalloutPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-create-a-callout',
  templateUrl: 'skillexr-create-a-callout.html',
})
export class SkillexrCreateACalloutPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNextPage(){
    this.navCtrl.push('SkillexrCreateACallout1Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrCreateACalloutPage');
  }

}
