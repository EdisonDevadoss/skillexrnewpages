import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrEditCreateShowOff1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-edit-create-show-off1',
  templateUrl: 'skillexr-edit-create-show-off1.html',
})
export class SkillexrEditCreateShowOff1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToEditCreateShowOff2(){
    this.navCtrl.push('SkillexrEditCreateShowOff2Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrEditCreateShowOff1Page');
  }

}
