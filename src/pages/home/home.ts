import { TutorialPage } from './../tutorial/tutorial';
import { ConsultaPatologiaPage } from './../consulta-patologia/consulta-patologia';
import { LoginPage } from './../login/login';
import { ConsultaPage } from './../consulta/consulta';
import { Component } from '@angular/core';
import { NavController, ModalController, MenuController } from 'ionic-angular';
import { ConfiguracaoPage } from '../configuracao/configuracao';
import { AvisosPage } from '../avisos/avisos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dadosUser: any;

  constructor(public menu: MenuController, public navCtrl: NavController, public modalCtrl: ModalController) {
   
  }

  ionViewDidLoad() {
    if(localStorage.getItem('dta_user')){
      this.dadosUser = JSON.parse(localStorage.getItem('dta_user'));
      this.menu.enable(true);
   } else {
    this.navCtrl.push(LoginPage);
   }
  }

  openConsulta(item){
    this.navCtrl.setRoot(ConsultaPage, {ct: item});
  }

  openConsultaP(item){
    this.navCtrl.setRoot(ConsultaPatologiaPage, {ct: item});
  }


  openConfiguracao(){
    this.navCtrl.push(ConfiguracaoPage);
  }

  login (){
    this.navCtrl.setRoot(LoginPage);
  }

  avisos(){

  this.navCtrl.push(AvisosPage)
  }

  tutorial(){
    this.navCtrl.push(TutorialPage)
    }
}
