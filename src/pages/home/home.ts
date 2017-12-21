import { LoginPage } from './../login/login';
import { ConsultaPage } from './../consulta/consulta';
import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  dadosUser: any;
  constructor(public navCtrl: NavController, public modalCtrl: ModalController) {
    if(localStorage.getItem('dta_user')){
      this.dadosUser = JSON.parse(localStorage.getItem('dta_user'));
   } else {
    this.navCtrl.push(LoginPage);
   }


   console.log(this.dadosUser);
  }


  openConsulta(item){
    this.navCtrl.setRoot(ConsultaPage, {ct: item});
  }

  login (){
    this.navCtrl.setRoot(LoginPage);
  }

}
