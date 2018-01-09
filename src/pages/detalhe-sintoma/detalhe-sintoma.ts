import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController } from 'ionic-angular';

/**
 * Generated class for the DetalheSintomaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  templateUrl: 'detalhe-sintoma.html',
})
export class DetalheSintomaPage {


  sintomas:any;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.sintomas = navParams.get("sintomas");
    console.log(this.sintomas);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheSintomaPage');
  }

  close(){
    this.viewCtrl.dismiss();
  }


}
