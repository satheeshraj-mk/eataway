import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommunicationProvider } from '../../providers/communication/communication';
import { DataProvider } from '../../providers/data/data';

import {ViewChild} from '@angular/core';
import {Slides} from 'ionic-angular';
import { CartsPage } from '../carts/carts';

@Component({
  selector: 'page-menu',
  templateUrl: 'menu.html'
})
export class MenuPage {
  private dinnerList :Array<any>;
  private snacksList :Array<any>;
  private lunchList:Array<any>;

  private activeMenu: String;
  private itemList;
  private itemCount:number;

  @ViewChild(Slides) slides:Slides;

  constructor(public navCtrl: NavController,private communicationService:CommunicationProvider, private dataService:DataProvider) {
    this.activeMenu = 'Dinner';
    this.dinnerList=this.dataService.getDinnerList();
    this.snacksList=this.dataService.getSnacksList();
    this.lunchList=this.dataService.getLunchList();
    this.itemList = this.dinnerList;
    this.itemCount=0;

  }
  addToCart(item) {
    this.communicationService.updateItemsCount(item);
  }
  changeMenu(menuName) {
    this.activeMenu = menuName;
    this.itemList = [];
    this.slides.slideTo(0);
    if (this.activeMenu === 'Dinner') {
      this.itemList = this.dinnerList;
    } else if (this.activeMenu === 'Snacks') {
      this.itemList = this.snacksList;
    } else {
      this.itemList = this.lunchList;
    }


  }
  navigateToCart(){
    this.navCtrl.push(CartsPage);
  }

}
