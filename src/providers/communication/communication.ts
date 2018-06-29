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
    this.selectedItems.push(item);
    this.itemsCount.next(this.selectedItems.length);
  }
  
  fetchSelectedItems(){
    return this.selectedItems;
  }



}
