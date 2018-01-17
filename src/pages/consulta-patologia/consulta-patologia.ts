import { DetalhePatologiaPage } from './../detalhe-patologia/detalhe-patologia';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams, ModalController } from 'ionic-angular';

/**
 * Generated class for the ConsultaPatologiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-consulta-patologia',
  templateUrl: 'consulta-patologia.html',
})
export class ConsultaPatologiaPage {

    sintomas: any =[];

    tem:any;

    lista:any[];
    items: any[];

    filtro: any;
    controle: any;

    constructor(public modalCtrl: ModalController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

    this.getDados();

    }

    ionViewDidLoad() {
      console.log('ionViewDidLoad ConsultaPage');
    }


    initializeItems() {

          this.items = this.lista;

       }

  getSintomas(ev: any) {

  this.initializeItems();
      let val = ev.target.value;
      if (val && val.trim() != '') {
        this.tem = true;
        this.items = this.items.filter((item) => {
          return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1);
        })
      }else{
            this.tem = false;

      }
    }


    getDados(){

      this.service.getPat().subscribe((data)=>{

       this.lista = data;
       console.log(this.lista);
       this.items = this.lista;
          },(err)=>{

          });

        }


      addSintomas(item) {

        this.sintomas.push(item);
          console.log(this.sintomas);
      }

      delete(item){
        const index = this.sintomas.indexOf(item);
        this.sintomas.splice(index, 1);

     }

     consultar(item){
       console.log(item);

       let modal = this.modalCtrl.create(DetalhePatologiaPage,{
         item: item
       });
  modal.onDidDismiss(data => {


  });
  modal.present();

     }


     filtroConsulta(){
      if(this.filtro[0] == "todos") {
        this.getDados();
      }
      else {
        this.items = [];
        for (var i = 0; i < this.filtro.length; i++) {
          this.service.getPatologiasTipo(this.filtro[i]).then((data)=>{
            this.controle = data; 
            for (var j = 0; j < this.controle.length; j++) { 
              this.items.push(this.controle[j]);
            }
            console.log(this.items);
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
          this.items.push(this.items[j]);
          j++;
        }
        console.log('Async operation has ended');
        infiniteScroll.complete();
      }, 500);
    }

  }
