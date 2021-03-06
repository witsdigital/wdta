import { DetalheConsultaPage } from './../detalhe-consulta/detalhe-consulta';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ModalController, ViewController } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';



@Component({
  selector: 'page-get-consulta',
  templateUrl: 'get-consulta.html',
})
export class GetConsultaPage {

  sintomas: any;
  allsintomas: any = [''];
  mensagem = 'Aguarde...';
  patologias: any;
  filtro: any = [''];
  controle: any;


  constructor(public viewCtrl: ViewController, public modalCtrl: ModalController, public service: ServiceProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {

    this.sintomas = navParams.get("item");
    console.log(this.sintomas);
    this.getSintomas();



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
      let modal = this.modalCtrl.create(DetalheConsultaPage,{
        sin: this.sintomas,
        pat: item
      });
 modal.onDidDismiss(data => {


 });
 modal.present();

}

close(){
  this.viewCtrl.dismiss();
}

     getSintomas(){

      let loader = this.loadingCtrl.create({
        content: "Carregando...",
        duration: 15000
      });
      loader.present();

          this.service.getPatologiasSintomas(this.sintomas).then((data)=>{
           this.allsintomas = data;
           this.mensagem = 'Desculpe, nada encontrado';
             loader.dismiss();
           console.log(this.allsintomas);
              },(err)=>{

              });

      }

  filtroConsulta(){
    let loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    loader.present();
      if(this.filtro[0] == "") {
        this.getSintomas();
        loader.dismiss();
      }
      else {
        this.allsintomas = [];
        for (var i = 0; i < this.filtro.length; i++) {
          this.service.getPatologiasSintomasTipo(this.sintomas, this.filtro[i]).then((data)=>{
            this.controle = data;
            for (var j = 0; j < this.controle.length; j++) {
              this.allsintomas.push(this.controle[j]);
            }

           var aux;
            for (var i = 0; i < this.allsintomas.length; i++){
              for (var j = 0; j < this.allsintomas.length; j++){
                   if ( this.allsintomas[j].nome > this.allsintomas[i].nome)
                   {
                       aux = this.allsintomas[i];
                       this.allsintomas[i] = this.allsintomas[j];
                       this.allsintomas[j] = aux;
                   }
               }
           }

           for (var i = 0; i < this.allsintomas.length; i++){
            for (var j = 0; j < this.allsintomas.length; j++){
                 if ( this.allsintomas[i].qtd > this.allsintomas[j].qtd)
                 {
                     aux = this.allsintomas[i];
                     this.allsintomas[i] = this.allsintomas[j];
                     this.allsintomas[j] = aux;
                 }
             }
         }


            console.log(this.allsintomas);
              loader.dismiss();
               },(err)=>{
          });
      }
      }
    }



    doInfinite(infiniteScroll) {
      console.log('Begin async operation');
      var j = 0;
      setTimeout(() => {
        for (var i = 0; i > 10; i++) {
          this.allsintomas.push(this.allsintomas[j]);
          j++;
        }

        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 500);
    }


}
