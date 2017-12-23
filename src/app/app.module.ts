import { ConfiguracaoPage } from './../pages/configuracao/configuracao';
import { CadUserPage } from './../pages/cad-user/cad-user';
import { LoginPage } from './../pages/login/login';
import { DetalheConsultaPage } from './../pages/detalhe-consulta/detalhe-consulta';
import { GetConsultaPage } from './../pages/get-consulta/get-consulta';
import { RecPassPage } from '../pages/rec-pass/rec-pass';
import { ConsultaPatologiaPage } from '../pages/consulta-patologia/consulta-patologia';
import { DetalhePatologiaPage } from '../pages/detalhe-patologia/detalhe-patologia';
import { ConsultaPage } from '../pages/consulta/consulta';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { ServiceProvider } from '../providers/service/service';
import { HttpModule } from '@angular/http';
import { SocialSharing } from '@ionic-native/social-sharing';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    ConsultaPage,
    GetConsultaPage,
    DetalheConsultaPage,
    LoginPage,
    CadUserPage,
    RecPassPage,
    ConsultaPatologiaPage,
    DetalhePatologiaPage,
    ConfiguracaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    ConsultaPage,
    GetConsultaPage,
    DetalheConsultaPage,
    LoginPage,
    CadUserPage,
    RecPassPage,
    ConsultaPatologiaPage,
    DetalhePatologiaPage,
    ConfiguracaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ServiceProvider,
    SocialSharing
  ]
})
export class AppModule {}
