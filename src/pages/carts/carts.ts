import { Component,ElementRef,ViewChild,NgZone} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CommunicationProvider } from '../../providers/communication/communication';
import { MapsAPILoader } from '../../../node_modules/@agm/core';
import { } from 'googlemaps';

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
  private lat: number;
  private lng: number;
  private zoom:number;
  @ViewChild("search")
  public searchElementRef: ElementRef;

  constructor(public navCtrl: NavController, 
      public navParams: NavParams,
      private communicationService:CommunicationProvider,
      private mapsAPILoader:MapsAPILoader,
      private ngZone:NgZone) {
      this.zoom=12;
  }
  
  ionViewDidLoad() {
    this.selectedItems=this.communicationService.fetchSelectedItems();
    this.autoPopulateAdress();
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
  /**
   * Fetching and setting the currnet position
   */
  setCurrentPosition(){
    if(navigator){
      navigator.geolocation.getCurrentPosition(pos=>{
        this.lat=pos.coords.latitude;
        this.lng=pos.coords.longitude;
        // let location=google.maps.LatLng(this.lat,this.lng);
        // this.map.pan
      });
    }
  }
  autoPopulateAdress(){
    //load Places Autocomplete
    this.mapsAPILoader.load().then(() => {
        let serchLoactionInput = document.getElementById('txtLocationSearchBox').getElementsByTagName('input')[0];
        let autocomplete = new google.maps.places.Autocomplete(serchLoactionInput, {
            types: ["address"]
        });
        autocomplete.addListener("place_changed", () => {
            this.ngZone.run(() => {
                //get the place result
                let place: google.maps.places.PlaceResult = autocomplete.getPlace();

                //verify result
                if (place.geometry === undefined || place.geometry === null) {
                    return;
                }
                //set latitude, longitude and zoom
                this.lat = place.geometry.location.lat();
                this.lng = place.geometry.location.lng();
                this.zoom = 12;
            });
        });
    });
  }

}
