import { Component } from '@angular/core';

// import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { RemindersPage } from '../reminders/reminders';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = RemindersPage;
  tab3Root = ContactPage;

  constructor() {

  }
}
