import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalheConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalhe-consulta',
  templateUrl: 'detalhe-consulta.html',
})
export class DetalheConsultaPage {

  sintomas: any;
  allsintomas: any;
  patologia: any

  constructor(public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.sintomas = navParams.get("sin");
    this.patologia = navParams.get("pat");
    this. getSintomas();
    console.log(this.patologia);
    console.log(this.sintomas);
    
  
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheConsultaPage');
  }

  getSintomas(){
    
        this.service.getSintomasID(this.patologia).then((data)=>{
         this.allsintomas = data;
         console.log(this.allsintomas);
            },(err)=>{
        
            });
        
    }


}
