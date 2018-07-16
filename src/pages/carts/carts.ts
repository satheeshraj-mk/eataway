import { Component} from '@angular/core';
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
export class CartsPage{

  private selectedItems:Array<any>=[];
  private totalPrice:number;
  lat: number = 51.678418;
  lng: number = 7.809007;
  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    private communicationService:CommunicationProvider) {
    console.log("Constructor");
  }

  ionViewDidLoad() {
    this.selectedItems=this.communicationService.fetchSelectedItems();
  }
  /**
   * ionViewDidEnter():Fired when entering a page, after it becomes the active page.
   */
  ionViewDidEnter(){
    var i=0;
    var temp;
    this.totalPrice=0;
    
    //calculating TotalPrice
    for(i=0;i<this.selectedItems.length;i++){
      temp=this.selectedItems[i].quantity*this.selectedItems[i].price;
      this.totalPrice=this.totalPrice + temp;
    }
  }

  removeItem(item:any){
    this.communicationService.removeItem(item);
  }

}
