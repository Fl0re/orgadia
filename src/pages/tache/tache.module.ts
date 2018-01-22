import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TachePage } from './tache';

@NgModule({
  declarations: [
    TachePage,
  ],
  imports: [
    IonicPageModule.forChild(TachePage),
  ],
})
export class TachePageModule {}
