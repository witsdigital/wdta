import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {ConfiguracaoPage} from '../pages/configuracao/configuracao';
import {ConsultaPage} from '../pages/consulta/consulta';
import {ConsultaPatologiaPage} from '../pages/consulta-patologia/consulta-patologia';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  pages: Array<{title: string, component: any}>;
  dadosUser: any;
  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {


    this.initializeApp();
    this.pages = [
      { title: 'Home', component: HomePage },
      { title: 'Configuração', component: ConfiguracaoPage },
      { title: 'Consulta', component: ConsultaPage },
      { title: 'Condições Patológicas', component: ConsultaPatologiaPage }


    ];

    if(localStorage.getItem('dta_user')){
      this.dadosUser = JSON.parse(localStorage.getItem('dta_user'));
    }

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
