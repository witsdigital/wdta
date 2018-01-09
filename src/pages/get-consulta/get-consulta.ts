import { DetalheConsultaPage } from './../detalhe-consulta/detalhe-consulta';
import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { reorderArray } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';
/**
 * Generated class for the GetConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-get-consulta',
  templateUrl: 'get-consulta.html',
})
export class GetConsultaPage {

  sintomas: any;
  allsintomas: any;
  patologias: any;
  filtro: any = [0,1,2];
  controle: any;
  
  
  constructor(public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {

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
      this.navCtrl.push(DetalheConsultaPage, {
        sin: this.sintomas,
        pat: item
      });
     }

     getSintomas(){

          this.service.getPatologiasSintomas(this.sintomas).then((data)=>{
           this.allsintomas = data;
           console.log(this.allsintomas);
              },(err)=>{

              });

      }

  filtroConsulta(){
      if(this.filtro[0] == "") {
        this.getSintomas();
      }
      else {
        this.allsintomas = [];
        for (var i = 0; i < this.filtro.length; i++) {
          this.service.getPatologiasSintomasTipo(this.sintomas, this.filtro[i]).then((data)=>{
            this.controle = data; 
            for (var j = 0; j < this.controle.length; j++) { 
              this.allsintomas.push(this.controle[j]);
            }
            console.log(this.allsintomas);
               },(err)=>{
          });
      }
      }
    }



}
