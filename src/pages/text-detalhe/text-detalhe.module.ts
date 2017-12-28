import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TextDetalhePage } from './text-detalhe';

@NgModule({
  declarations: [
    TextDetalhePage,
  ],
  imports: [
    IonicPageModule.forChild(TextDetalhePage),
  ],
})
export class TextDetalhePageModule {}
