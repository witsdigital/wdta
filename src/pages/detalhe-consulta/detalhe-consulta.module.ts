import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DetalheConsultaPage } from './detalhe-consulta';

@NgModule({
  declarations: [
    DetalheConsultaPage,
  ],
  imports: [
    IonicPageModule.forChild(DetalheConsultaPage),
  ],
})
export class DetalheConsultaPageModule {}
