import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CadUserPage } from './cad-user';

@NgModule({
  declarations: [
    CadUserPage,
  ],
  imports: [
    IonicPageModule.forChild(CadUserPage),
  ],
})
export class CadUserPageModule {}
