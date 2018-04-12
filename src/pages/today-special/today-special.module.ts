import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TodaySpecialPage } from './today-special';

@NgModule({
  declarations: [
    TodaySpecialPage,
  ],
  imports: [
    IonicPageModule.forChild(TodaySpecialPage),
  ],
})
export class TodaySpecialPageModule {}
