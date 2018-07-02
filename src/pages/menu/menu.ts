import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CommunicationProvider } from '../../providers/communication/communication';
import { DataProvider } from '../../providers/data/data';

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
  constructor(public navCtrl: NavController,private communicationService:CommunicationProvider, private dataService:DataProvider) {
    this.activeMenu = 'Dinner';
    this.dinnerList=this.dataService.getDinnerList();
    this.snacksList=this.dataService.getSnacksList();
    this.lunchList=this.dataService.getLunchList();
    this.itemList = this.dinnerList;
    this.itemCount=0;
    console.log("sf " + this.activeMenu);
  }
  addToCart(item) {
    this.communicationService.updateItemsCount(item);
  }
  changeMenu(menuName) {
    this.activeMenu = menuName;
    this.itemList = [];

    if (this.activeMenu === 'Dinner') {
      this.itemList = this.dinnerList;
    } else if (this.activeMenu === 'Snacks') {
      this.itemList = this.snacksList;
    } else {
      this.itemList = this.lunchList;
    }


  }

}
