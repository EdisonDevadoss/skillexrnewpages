import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrEditBadge1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-edit-badge1',
  templateUrl: 'skillexr-edit-badge1.html',
})
export class SkillexrEditBadge1Page {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  gotoEditDisplayPicturPage(){
    this.navCtrl.push('SkillexrEditDisplayPicturePage');
  }
  goToEditListofSkillsPage(){
    this.navCtrl.push('SkillexrEditListOfSkillsPage');
  }
  goToContactPage(){
    this.navCtrl.push('SkillexrContactPage');
  }
  goToLocation(){
    this.navCtrl.push('SkillexrLocationPage');
  }

  goToAboutPage(){
    this.navCtrl.push('SkillexrAboutPage');
  }
  goToShowOff(){
    this.navCtrl.push('SkillexrEditShowOffPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrEditBadge1Page');
  }

}
