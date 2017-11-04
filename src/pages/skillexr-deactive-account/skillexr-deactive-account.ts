import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrDeactiveAccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-deactive-account',
  templateUrl: 'skillexr-deactive-account.html',
})
export class SkillexrDeactiveAccountPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrProfileListPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrDeactiveAccountPage');
  }

}
