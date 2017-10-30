import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrBlockReport1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-block-report1',
  templateUrl: 'skillexr-block-report1.html',
})
export class SkillexrBlockReport1Page {
  isReadonly:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isReadonly = true;
  }
  goToNext(){
    this.navCtrl.pop();
  }
  goToNext1(){
    this.navCtrl.push('SkillexrFilterPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrBlockReport1Page');
  }

}
