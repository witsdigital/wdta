import { ConsultaPage } from './../consulta/consulta';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {

  }


  openConsulta(item){
    this.navCtrl.setRoot(ConsultaPage, {ct: item});


  }

}
