import { TextDetalhePage } from './../text-detalhe/text-detalhe';
import { DetalheSintomaPage } from './../detalhe-sintoma/detalhe-sintoma';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, ModalController } from 'ionic-angular';

/**
 * Generated class for the DetalhePatologiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */


@Component({
  selector: 'page-detalhe-patologia',
  templateUrl: 'detalhe-patologia.html',
})
export class DetalhePatologiaPage {

    sintomas: any;
    allsintomas: any;
    patologia: any;
    qtd=0;
    newsintomas:any = {nome:'', st:''};
    newsint:any = [];

    constructor(public modalCtrl:ModalController,public service: ServiceProvider,public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
      this.patologia = navParams.get("item");
      console.log(this.patologia);
      this. getSintomas();


    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad DetalheConsultaPage');
    }

    close(){

    this.viewCtrl.dismiss();
  }
    getSintomas(){

          this.service.getSintomasID(this.patologia).then((data)=>{
           this.allsintomas = data;
          for(let i in data){
            for(let a in this.sintomas){
              if(this.allsintomas[i].nome == this.sintomas[a].nome){
  this.newsint.push({nome:this.allsintomas[i].nome, st:1})



            }else{
  this.newsint.push({nome:this.allsintomas[i].nome, st:0})

            }
            }


          }
          console.log(this.newsint);
              },(err)=>{

              });



    }
    calcinfo(){
      for(let i=0; i<this.allsintomas.length-1; i++){
          for(let a = 0; a<this.sintomas.length-1;a++){
              if(this.allsintomas[i].nome == this.sintomas[a].nome){
                console.log('esta');

              }

          }

      }
    }

    detalhes(item) {
      let modal = this.modalCtrl.create(DetalheSintomaPage,{sintomas:item});
      modal.onDidDismiss(data => {
    
    
      });
      modal.present();
     }

     exibidesc(simtoma){
      console.log(simtoma);
      let modal = this.modalCtrl.create(TextDetalhePage,{texto:simtoma});
      modal.onDidDismiss(data => {
    
    
      });
      modal.present();
    }



  }
