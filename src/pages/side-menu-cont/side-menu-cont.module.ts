import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SideMenuContPage } from './side-menu-cont';

@NgModule({
  declarations: [
    SideMenuContPage,
  ],
  imports: [
    IonicPageModule.forChild(SideMenuContPage),
  ],
})
export class SideMenuContPageModule {}
