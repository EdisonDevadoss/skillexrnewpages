import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { SkillexrSettingsPage } from './skillexr-settings';

@NgModule({
  declarations: [
    SkillexrSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(SkillexrSettingsPage),
  ],
})
export class SkillexrSettingsPageModule {}
