import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetalhePatologiaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
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
  
    constructor(public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
      this.patologia = navParams.get("item");
      this. getSintomas();
  
  
    }
  
    ionViewDidLoad() {
      console.log('ionViewDidLoad DetalheConsultaPage');
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
  
  
  
  }
  