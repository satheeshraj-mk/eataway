import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {OrdersPage} from '../orders/orders'

@Component({
  selector: 'page-contact',
  templateUrl: 'contact.html'
})
export class ContactPage {

  constructor(public navCtrl: NavController) {

  }
  goToOrdersPage(){
    this.navCtrl.push(OrdersPage);
  }
}
