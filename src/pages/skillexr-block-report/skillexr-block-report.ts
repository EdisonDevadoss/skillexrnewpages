import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrBlockReportPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-block-report',
  templateUrl: 'skillexr-block-report.html',
})
export class SkillexrBlockReportPage {
  isReadonly:boolean;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isReadonly = true;
  }
  goToNext(){
    this.navCtrl.push('SkillexrBlockReport1Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrBlockReportPage');
  }

}
