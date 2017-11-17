import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SideMenuContPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-side-menu-cont',
  templateUrl: 'side-menu-cont.html',
})
export class SideMenuContPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }
  goToNext(){
    this.navCtrl.pop();
  }
  goToCallOutPage(){
    this.navCtrl.push('SkillexrCalloutPage');
  }
  goToCallNotificationPage(){
    this.navCtrl.push('SkillexrNotificationPage');
  }
  goToCallReachPage(){
    this.navCtrl.push('SkillexrReachPage');
  }
  goToSettingsPage(){
    this.navCtrl.push('SkillexrSettingsPage');
  }
  goToReportIssues(){
    this.navCtrl.push('SkillexrReportIssuesPage');
  }
  goToAboutUs(){
    this.navCtrl.push('SkillexrAboutUsPage');
  }

  goToEditBadge(){
    this.navCtrl.push('SkillexrEditBadge1Page');
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad SideMenuContPage');
  }

}
