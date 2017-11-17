import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrFilterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-filter',
  templateUrl: 'skillexr-filter.html',
})
export class SkillexrFilterPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrCalloutPage');
  }
  goToFilterPage(){
    this.navCtrl.push('SkillexrProfileListPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrFilterPage');
  }

}
