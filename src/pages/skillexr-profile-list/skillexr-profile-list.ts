import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrProfileListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-profile-list',
  templateUrl: 'skillexr-profile-list.html',
})
export class SkillexrProfileListPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.push('SkillexrProfileEditPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrProfileListPage');
  }

}
