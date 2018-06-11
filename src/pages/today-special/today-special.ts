import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {MenuPage} from '../menu/menu';

/**
 * Generated class for the TodaySpecialPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-today-special',
  templateUrl: 'today-special.html',
})
export class TodaySpecialPage {
  menuPage:any
  imageList=["../../assets/imgs/1.jpg","../../assets/imgs/2.png","../../assets/imgs/3.jpg","../../assets/imgs/4.jpg"];
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TodaySpecialPage');
  }

  showMenuDetails(){
    this.menuPage=MenuPage;
  }

}
