import { ServiceProvider } from './../../providers/service/service';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';
import { DecimalPipe } from '@angular/common';
import { TextDetalhePage } from '../text-detalhe/text-detalhe';
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
  qtd = 0;
  newsintomas: any = { nome: '', st: '' };
  newsint: any = [];
  area: any = [];

  sint;
  tamanhofont: any;
  configfont: any;

  constructor(public modalCtrl: ModalController,public viewCtrl: ViewController, public service: ServiceProvider, public navCtrl: NavController, public navParams: NavParams) {
    this.tamanhofont = 14;
    this.configfont = {
  
      'font-size': this.tamanhofont + 'px'

    }
    this.sintomas = navParams.get("sin");
    console.log(this.sintomas);
    this.patologia = navParams.get("pat");
    this.getSintomas();


    this.getArea();



  }

  aumentarfont() {
    this.tamanhofont = this.tamanhofont + 1;
    this.configfont = {
  
      'font-size': this.tamanhofont + 'px'

    }
  }
  diminuirfont() {
    this.tamanhofont = this.tamanhofont - 1;
    this.configfont = {

      'font-size': this.tamanhofont + 'px'

    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetalheConsultaPage');
  }
  getArea() {

    this.service.getArea(this.patologia).then((data) => {
      this.area = data;
    }, (err) => {

    });

  }

  close(){
    this.viewCtrl.dismiss();
  }



  exibidesc(sintoma) {
    console.log(sintoma);
    let modal = this.modalCtrl.create(TextDetalhePage, { texto: sintoma });
    modal.onDidDismiss(data => {


    });
    modal.present();
  }
  getSintomas() {

    this.service.getSintomasID(this.sintomas, this.patologia.id_patologia).then((data) => {
      this.allsintomas = data;
      for (let i in data) {
        for (let a in this.sintomas) {
          if (this.allsintomas[i].nome == this.sintomas[a].nome) {
            this.newsint.push({ nome: this.allsintomas[i].nome, st: 1 })



          } else {
            this.newsint.push({ nome: this.allsintomas[i].nome, st: 0 })

          }
        }


      }
      console.log(this.allsintomas);
    }, (err) => {

    });



  }


  detalhes(item) {
    let modal = this.modalCtrl.create(DetalheSintomaPage, { sintomas: item });
    modal.onDidDismiss(data => {


    });
    modal.present();
  }



}
