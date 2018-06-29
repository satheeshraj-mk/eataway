import { Component } from '@angular/core';

import { ContactPage } from '../contact/contact';
import { TodaySpecialPage } from '../today-special/today-special';
import { CommunicationProvider } from '../../providers/communication/communication';
import { CartsPage } from '../carts/carts';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  todaySpecial = TodaySpecialPage
  carts = CartsPage;
  tab3Root = ContactPage;
  public itemCount:number;
  constructor(private communicationService:CommunicationProvider) {
    //Subscribe updated items count from the Menu list
    this.communicationService.itemsCount$.subscribe(count=>{
      this.itemCount=count;
    })
  }
}
