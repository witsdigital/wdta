import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';
import {TextDetalhePage} from '../text-detalhe/text-detalhe';
import { DetalheSintomaPage } from '../detalhe-sintoma/detalhe-sintoma';
/**
 * Generated class for the DetalheConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-detalhe-consulta',
  templateUrl: 'detalhe-consulta.html',
})
export class DetalheConsultaPage {

  sintomas: any = {};

  allsintomas: any;
  patologia: any;
  qtd=0;
  newsintomas:any = [];
  newsint:any = [];


  sint;

  constructor(public modalCtrl:ModalController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.sintomas = navParams.get("sin");
    console.log(this.sintomas);
    this.patologia = navParams.get("pat");
    this. getSintomas();


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheConsultaPage');
  }

exibidesc(simtoma){
  console.log(simtoma);
  let modal = this.modalCtrl.create(TextDetalhePage,{texto:simtoma});
  modal.onDidDismiss(data => {


  });
  modal.present();
}
  getSintomas(){

        this.service.getSintomasID(this.patologia).then((data)=>{
         this.allsintomas = data;
        for(let i in data){
          for(let a in this.sintomas){
            if(this.allsintomas[i].nome == this.sintomas[a].nome){
this.newsint.push({nome:this.allsintomas[a].nome,
  st:1,
  tipo_sintoma: this.allsintomas[a].tipo_sintoma,
  descricao: this.allsintomas[a].descricao
})



          }else{
this.newsint.push({
  nome:this.allsintomas[a].nome,
              st:0,
              tipo_sintoma: this.allsintomas[a].tipo_sintoma,
              descricao: this.allsintomas[a].descricao
})

          }
          }


        }


        for (var a = 0; a < this.newsint.length; a++) {
          var count = 0;
          if(this.newsintomas.length == 0) {
            this.newsintomas.push(this.newsint[a]);
          } 
          if(this.newsintomas.length != 0) {
          for (var i = 0; i < this.newsintomas.length; i++) {
            if(this.newsint[a].nome === this.newsintomas[i].nome){
              count=1;
            }
          }
          if(count == 0) {
            this.newsintomas.push(this.newsint[a]);
          }
        }
      }
        console.log(this.newsintomas);
            },(err)=>{

            });



  }


  detalhes(item) {
    let modal = this.modalCtrl.create(DetalheSintomaPage,{sintomas:item});
    modal.onDidDismiss(data => {
  
  
    });
    modal.present();
   }



}
