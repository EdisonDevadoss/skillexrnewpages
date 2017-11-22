import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrEditAlbumPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-edit-album',
  templateUrl: 'skillexr-edit-album.html',
})
export class SkillexrEditAlbumPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToEditShowOff(){
    this.navCtrl.push('SkillexrEditShowOff1Page');
  }
  

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrEditAlbumPage');
  }

}
