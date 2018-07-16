import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ContactPage } from '../pages/contact/contact';
import { MenuPage } from '../pages/menu/menu';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { RegistrationPage } from '../pages/registration/registration';
import { TodaySpecialPage } from '../pages/today-special/today-special'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CommunicationProvider } from '../providers/communication/communication';
import { CartsPage } from '../pages/carts/carts';
import { DataProvider } from '../providers/data/data';


import { AgmCoreModule } from '@agm/core';


@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegistrationPage,
    AboutPage,
    ContactPage,
    MenuPage,
    TabsPage,
    TodaySpecialPage,
    CartsPage

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AgmCoreModule.forRoot({apiKey:'AIzaSyB3Qtit9ifizkxcfXjfsYqZDd-6dElBG-o'})
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegistrationPage,
    AboutPage,
    ContactPage,
    MenuPage,
    TabsPage,
    TodaySpecialPage,
    CartsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    CommunicationProvider,
    DataProvider
  ]
})
export class AppModule { }
