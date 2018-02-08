import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { GetConsultaPage } from '../get-consulta/get-consulta';

/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
})
export class ConsultaPage {

  sintomas: any =[];

  filtro: any = []

  tem:any;

  lista:any;
  items: any;

  constructor(public service: ServiceProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {


  this.getDados();

  let loader = this.loadingCtrl.create({
    content: "Carregando...",
    duration: 3000
  });
  loader.present();

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
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.nome_semacento.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.nome_semcaracteres.toLowerCase().indexOf(val.toLowerCase()) > -1 );
      })
    }else{
          this.tem = false;

    }
  }


  getDados(){

    this.service.getSintomas().subscribe((data)=>{

     this.lista = data;
     console.log(this.lista);
     this.items = this.lista;
        },(err)=>{

        });

      }


    addSintomas(item) {


      var count = 0;
      if (this.sintomas.length==0){
        this.sintomas.push(item);
      } else {

        for (var i = 0; i < this.sintomas.length; i++) {
          if (item == this.sintomas[i]){
            count++;
        }
      }
      if (count == 0) {
        this.sintomas.push(item);
      }

      }
      console.log(this.filtro);
        console.log(this.sintomas);
    }

    delete(item){
      const index = this.sintomas.indexOf(item);
      this.sintomas.splice(index, 1);

   }

   consultar(){
    this.navCtrl.push(GetConsultaPage, {
      item: this.sintomas
    });
   }

   consultarTipo(tipo){
    this.service.getSintomasTipo(tipo).then((data)=>{
       this.lista = data;
       console.log(this.lista);
       this.items = this.lista;
          },(err)=>{

          });
   }


}
