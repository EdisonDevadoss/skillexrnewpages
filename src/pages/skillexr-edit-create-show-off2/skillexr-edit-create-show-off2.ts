import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrEditCreateShowOff2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-edit-create-show-off2',
  templateUrl: 'skillexr-edit-create-show-off2.html',
})
export class SkillexrEditCreateShowOff2Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToShowOff(){
    this.navCtrl.push('SkillexrEditShowOffPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrEditCreateShowOff2Page');
  }

}
