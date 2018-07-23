import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunicationProvider } from '../../providers/communication/communication';


/**
 * Generated class for the OrdersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-orders',
  templateUrl: 'orders.html',
})
export class OrdersPage {
  private selectedItems:Array<any>=[];
  
  // private totalPrice:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,
    private communicationService:CommunicationProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OrdersPage');
    this.selectedItems=this.communicationService.fetchSelectedItems();
  }
  removeItem(item:any){
    this.communicationService.removeItem(item);
  }
}
