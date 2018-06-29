import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TodaySpecialPage } from '../today-special/today-special';
import { CommunicationProvider } from '../../providers/communication/communication';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  todaySpecial = TodaySpecialPage
  tab2Root = AboutPage;
  tab3Root = ContactPage;
  public itemCount:number;

  constructor(private communicationService:CommunicationProvider) {
    //Subscribe updated items count from the Menu list
    this.communicationService.itemsCount$.subscribe(count=>{
      this.itemCount=count;
    })
  }
}
