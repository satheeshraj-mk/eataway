import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { TodaySpecialPage } from '../today-special/today-special';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  todaySpecial = TodaySpecialPage
  tab2Root = AboutPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
