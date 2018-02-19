import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TextDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-text-detalhe',
  templateUrl: 'text-detalhe.html',
})
export class TextDetalhePage {
  info:any;
  tamanhofont: any;
  configfont: any;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.get('texto');
    this.tamanhofont = 14;
    this.configfont = {

      'font-size': this.tamanhofont + 'px'

    }

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextDetalhePage');
  }
  close(){
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
