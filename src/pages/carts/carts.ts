import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunicationProvider } from '../../providers/communication/communication';

/**
 * Generated class for the CartsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carts',
  templateUrl: 'carts.html',
})
export class CartsPage {

  private selectedItems:Array<any>=[];
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private communicationService:CommunicationProvider) {
    
  }

  ionViewDidLoad() {
    this.selectedItems=this.communicationService.fetchSelectedItems();
  }
  removeItem(item:any){
    this.communicationService.removeItem(item);
  }

}
