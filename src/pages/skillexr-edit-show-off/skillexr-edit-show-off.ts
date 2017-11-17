import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrEditShowOffPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-edit-show-off',
  templateUrl: 'skillexr-edit-show-off.html',
})
export class SkillexrEditShowOffPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToAlbum(){
    this.navCtrl.push('SkillexrEditAlbumPage');
  }
  goToEditShowOff1(){
    this.navCtrl.push('SkillexrEditShowOff1Page');
  }

  goToEditCreateShowOff1(){
    this.navCtrl.push('SkillexrEditCreateShowOff1Page');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrEditShowOffPage');
  }

}
