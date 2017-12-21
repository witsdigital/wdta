import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalhePatologiaPage } from './detalhe-patologia';

@NgModule({
  declarations: [
    DetalhePatologiaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalhePatologiaPage),
  ],
})
export class DetalhePatologiaPageModule {}
