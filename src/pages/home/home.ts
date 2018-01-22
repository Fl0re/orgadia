import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }
  moutharray= new Array(12)
  fakeArray = new Array(30);
  jours: string[]= ['Lun','Mar','Mer','Jeu','Ven','Sam','Dim'];
  mois: string[] = ['Janvier', 'Fevrier', 'Mars', 'Avril', 'Mai', 'Juin', 'Juillet', 'Aout', 'Septembre', 'Octobre', 'Novembre', 'Décembre'];
  monthDays:number[] = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  date = new Date();
  d = this.date.getDate();
  m = this.date.getMonth();
  y = this.date.getFullYear();

  calendar(){

  }

 }

