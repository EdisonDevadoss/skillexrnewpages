import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SkillexrCreatebadge1Page page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-skillexr-createbadge1',
  templateUrl: 'skillexr-createbadge1.html',
})
export class SkillexrCreatebadge1Page {
  labelIcon: boolean = false;
  getdetail: boolean = false;
  roles:any = [{}];
  getitem:any = [{}];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    //this.roles = ['Personal', 'Freelancer', 'Company']
    this.roles = [
      {role: 'Personal', icon: 'fa fa-users'},
      {role: 'Freelancer', icon: 'fa fa-user'},
      {role: 'Company', icon: 'fa fa-building'}
    ]
  }
  selectYourRole(){
   this.labelIcon = true; 
  }
  selectOne(item){

    console.log(item);
    //let index = this.roles.indexOf(item);
    this.getitem[0] = item;
    // if(this.roles[index].icon === this.roles[index].icon){
    //   this.roles[index].icon = 'fa fa-check';
    // }
    this.getdetail = true;
    this.labelIcon = false; 
    console.log(this.getitem, 'details');
    //this.roles[index].icon = 'fa fa-check';   
  }
  selectYourRoleAgain(){
    this.labelIcon = true;
    this.getdetail = false; 
  }
  next(){
    this.navCtrl.push('SkillexrCreatebadge2Page');
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad SkillexrCreatebadge1Page');
  }

}
