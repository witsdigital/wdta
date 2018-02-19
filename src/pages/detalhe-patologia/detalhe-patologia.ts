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
    area: any = [];
    newsintomas:any = {nome:'', st:''};
    newsint:any = [];

    constructor(public modalCtrl:ModalController,public service: ServiceProvider,public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
      this.patologia = navParams.get("item");
      console.log(this.patologia);
      this. getSintomas();
      this.getArea();


    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad DetalheConsultaPage');
    }

    close(){

    this.viewCtrl.dismiss();
  }



  getArea(){

    this.service.getArea(this.patologia).then((data)=>{
     this.area = data;
        },(err)=>{

        });

      }


    getSintomas(){

          this.service.getappSintomasPatologia(this.patologia.id_patologia).then((data)=>{
           this.allsintomas = data;

              },(err)=>{

              });



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
