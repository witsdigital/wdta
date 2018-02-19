import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetalheSintomaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  templateUrl: 'detalhe-sintoma.html',
})
export class DetalheSintomaPage {

  tamanhofont: any;
  configfont: any;
  sintomas: any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.sintomas = navParams.get("sintomas");
    console.log(this.sintomas);
    this.tamanhofont = 14;
    this.configfont = {

      'font-size': this.tamanhofont + 'px'

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheSintomaPage');
  }

  close() {
    this.viewCtrl.dismiss();
  }

  aumentarfont() {
    this.tamanhofont = this.tamanhofont + 1;
    this.configfont = {

      'font-size': this.tamanhofont + 'px'

    }
  }
  diminuirfont() {
    this.tamanhofont = this.tamanhofont - 1;
    this.configfont = {

      'font-size': this.tamanhofont + 'px'

    }
  }


}
