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

  filtro: any = ['todos']

  tem:any;

  lista:any;
  items: any;

  controle: any;
  pesquisa: any;

  constructor(public service: ServiceProvider, public loadingCtrl: LoadingController, public navCtrl: NavController, public navParams: NavParams) {


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
        return (item.nome.toLowerCase().indexOf(val.toLowerCase()) > -1 || item.nome_semacento.toLowerCase().indexOf(val.toLowerCase()) > -1  );
      })
    }else{
          this.tem = false;
    }
  }


  getDados(){

    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 15000
    });
    loader.present();

    this.service.getSintomas().subscribe((data)=>{

     this.lista = data;
     console.log(this.lista);
     this.items = this.lista;
     loader.dismiss();
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
      let loader = this.loadingCtrl.create({
        content: "Item adicionado a pesquisa",
        duration: 500
      });
      loader.present();





      console.log(this.filtro);
        console.log(this.sintomas);
    }

    onCancel(ev)
    {
        this.initializeItems();
        ev.stopPropagation();
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

   finalizar(){
   this.tem="";
   this.pesquisa="";
   }

   limpar(){
    this.sintomas=[];
    
    }


   consultarTipo(tipo){

    let loader = this.loadingCtrl.create({
      content: "Carregando..."
    });
    loader.present();

  

    this.service.getSintomasTipo(tipo).then((data)=>{
       this.lista = data;
       console.log(this.lista);
       this.items = this.lista;
       loader.dismiss();
          },(err)=>{

          });
   }



   
   filtroConsulta(){

    let loader = this.loadingCtrl.create({
      content: "Carregando...",
      duration: 15000
    });
    loader.present();

    if(this.filtro[0] == "todos") {
      this.getDados();
      loader.dismiss();
    }
    else {
      this.items = [];
      for (var i = 0; i < this.filtro.length; i++) {
        this.service.getSintomasTipo(this.filtro[i]).then((data)=>{
          this.controle = data; 
          for (var j = 0; j < this.controle.length; j++) { 
            this.items.push(this.controle[j]);
          }
          console.log(this.items);
          loader.dismiss();
             },(err)=>{
        });
    }
    }
  }



}
