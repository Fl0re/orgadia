import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { TachePage } from '../tache/tache';
import { ProfilPage } from '../profil/profil';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  agendaRoot = HomePage;
  resumeRoot = AboutPage;
  budgetRoot = ContactPage;
  tacheRoot = TachePage;
  profilRoot = ProfilPage;


  constructor() {

  }
}
