import { Component } from '@angular/core';
import { IonicPage, NavController,ViewController, NavParams } from 'ionic-angular';

/**
 * Generated class for the TextDetalhePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-text-detalhe',
  templateUrl: 'text-detalhe.html',
})
export class TextDetalhePage {
  info:any;

  constructor(public viewCtrl: ViewController,public navCtrl: NavController, public navParams: NavParams) {
    this.info = this.navParams.get('texto');

  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TextDetalhePage');
  }
  close(){
    this.viewCtrl.dismiss();
  }

}
