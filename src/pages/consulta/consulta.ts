import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GetConsultaPage } from '../get-consulta/get-consulta';

/**
 * Generated class for the ConsultaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-consulta',
  templateUrl: 'consulta.html',
})
export class ConsultaPage {

  sintomas: any =[];

  tem:any;

  lista:any[];
  items: any[];

  constructor(public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
  
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

    this.service.getSintomas().subscribe((data)=>{
    
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

   consultar(){
    this.navCtrl.push(GetConsultaPage, {
      item: this.sintomas
    }); 
   }
}
