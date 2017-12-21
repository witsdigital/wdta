import { Component } from '@angular/core';
import {  NavController, NavParams,ViewController,ToastController } from 'ionic-angular';
import {ServiceProvider} from '../../providers/service/service';
import {LoginPage} from '../login/login';
/**
 * Generated class for the CadUserPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-cad-user',
  templateUrl: 'cad-user.html',
})
export class CadUserPage {


  cadastro:any = {};
  cidades:any;
  mensage:any;
dadospush:any;

  constructor( public navCtrl: NavController, public navParams: NavParams,public toastCtrl:ToastController,public viewCtrl: ViewController, public service: ServiceProvider) {



  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadUserPage');
  }
  close(){
    this.viewCtrl.dismiss();
  }

  salvar(cad:any){

  }

}
