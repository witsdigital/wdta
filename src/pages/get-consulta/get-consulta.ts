import { DetalheConsultaPage } from './../detalhe-consulta/detalhe-consulta';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GetConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-get-consulta',
  templateUrl: 'get-consulta.html',
})
export class GetConsultaPage {
  sintomas: any;
  patologias: any;

  constructor(public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.sintomas = navParams.get("item");
    this.getP();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad GetConsultaPage');
  }



  
  getP(){
    
        this.service.getPatologias(this.sintomas).then((data)=>{
         this.patologias = data;
            },(err)=>{
        
            });
        
    }

    detalhes(item) {
      this.navCtrl.push(DetalheConsultaPage, {
        sin: this.sintomas,
        pat: item
      }); 
     }



}
