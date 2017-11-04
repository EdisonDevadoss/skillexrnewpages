import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillexrProfileListPage } from './skillexr-profile-list';

@NgModule({
  declarations: [
    SkillexrProfileListPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillexrProfileListPage),
  ],
})
export class SkillexrProfileListPageModule {}
