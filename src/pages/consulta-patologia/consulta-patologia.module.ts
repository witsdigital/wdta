import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConsultaPatologiaPage } from './consulta-patologia';

@NgModule({
  declarations: [
    ConsultaPatologiaPage,
  ],
  imports: [
    IonicPageModule.forChild(ConsultaPatologiaPage),
  ],
})
export class ConsultaPatologiaPageModule {}
