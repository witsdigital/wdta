import { LoginPage } from './../login/login';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, App } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
/**
 * Generated class for the ConfiguracaoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html',
})
export class ConfiguracaoPage {
  dadosUser: any;
  constructor(private socialSharing: SocialSharing, public app:  App, public loadingCtrl:LoadingController, public navCtrl: NavController, public navParams: NavParams) {

    this.dadosUser = JSON.parse(localStorage.getItem('dta_user'));
    console.log(this.dadosUser);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ConfiguracaoPage');
  }

  sair(){
    let loader = this.loadingCtrl.create({
      content: "Aguarde...",
      duration: 6000
    });
    loader.present();
    localStorage.removeItem('dta_user');
       loader.dismiss();
  this.app.getRootNav().setRoot(LoginPage);

  }

  share(){
    this.socialSharing.share("DTA, Diaginostico diferencial.",null/*Subject*/,null/*File*/,"http://www.google.com")

    .then(() => {
  // Sharing via email is possible
}).catch(() => {
  // Sharing via email is not possible
});
  }



}
