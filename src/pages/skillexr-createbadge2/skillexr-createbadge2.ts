import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

/**
 * Generated class for the SkillexrCreatebadge2Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-createbadge2',
  templateUrl: 'skillexr-createbadge2.html',
})
export class SkillexrCreatebadge2Page {
  verifiCode: boolean = false;
  constructor(public navCtrl: NavController, public navParams: NavParams, private loadingCtrl: LoadingController) {
  }
  createBadge2(){
    
    if(!this.verifiCode){
    const load = this.loadingCtrl.create({
      content: 'Verification code has been send',
      duration: 5000,
    });
    load.present();

    setTimeout(()=>{
    this.verifiCode = true;
    }, 5000)
    }
    else{
     this.navCtrl.push('SideMenuPage');
    }
  }
  backButtonClick(){
    this.navCtrl.pop();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrCreatebadge2Page');
  }

}
