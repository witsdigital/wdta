import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheSintomaPage } from './detalhe-sintoma';

@NgModule({
  declarations: [
    DetalheSintomaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheSintomaPage),
  ],
})
export class DetalheSintomaPageModule {}
