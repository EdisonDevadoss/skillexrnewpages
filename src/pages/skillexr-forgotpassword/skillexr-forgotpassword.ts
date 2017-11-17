import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the SkillexrForgotpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-forgotpassword',
  templateUrl: 'skillexr-forgotpassword.html',
})
export class SkillexrForgotpasswordPage {
  signOutVerifiCode: boolean = false;
  newpassword: boolean = false;

  constructor(public navCtrl: NavController,
     public navParams: NavParams,
     private loadingCtrl: LoadingController) {
  }
  signUp(){
    
    if(!this.signOutVerifiCode){
    const load = this.loadingCtrl.create({
      content: 'Verification code has been send',
      duration: 3000,
    });
    load.present();

    setTimeout(()=>{
    this.signOutVerifiCode = true;
    }, 3000)
    }
    else if(!this.newpassword){
      const load = this.loadingCtrl.create({
        content: 'Verification code has been send',
        duration: 1000,
      });
      load.present();
  
      setTimeout(()=>{
      this.newpassword = true;
      }, 1000)
    }
    else{
      this.navCtrl.push('SkillexrIndexPage');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrForgotpasswordPage');
  }

}
