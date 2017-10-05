import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LoadingController } from 'ionic-angular';

/**
 * Generated class for the SkillexrSignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-signup',
  templateUrl: 'skillexr-signup.html',
})
export class SkillexrSignupPage {
  signOutVerifiCode: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }
  signUp(){
    const load = this.loadingCtrl.create({
      content: 'Verification code has been send',
      duration: 5000,
    });
    load.present();

    setTimeout(()=>{
    this.signOutVerifiCode = true;
    }, 5000)
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrSignupPage');
  }

}
