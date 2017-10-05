import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';

/**
 * Generated class for the SkillexrIndexPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-index',
  templateUrl: 'skillexr-index.html',
})
export class SkillexrIndexPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  search(){

  }
  goToSignin(){
    this.navCtrl.push(HomePage);
  }
  goToSignUp(){
    this.navCtrl.push('SkillexrSignupPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrIndexPage');
  }

}
