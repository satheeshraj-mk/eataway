import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

/*
  Generated class for the CommunicationProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CommunicationProvider {
  private selectedItems:Array<any>=[];
  
  private itemsCount = new Subject<number>();
  itemsCount$ = this.itemsCount.asObservable();
  updateItemsCount(item: any) {
    var i=0;
    var isNewItem=true;
    //Check for item already added in the array, If added just update its quantity
    for(i=0;i<this.selectedItems.length;i++){
      if(this.selectedItems[i].itemId===item.itemId){
        this.selectedItems[i].quantity=item.quantity;
        isNewItem=false;
      }
    }
    //If the item is new item , just push it into the selectedItems array
    if(isNewItem){
      this.selectedItems.push(item);
    }
    
    this.itemsCount.next(this.selectedItems.length);
  }
  
  fetchSelectedItems(){
    return this.selectedItems;
  }



}
