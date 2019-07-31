import { Component } from '@angular/core';
import { ModalController} from '@ionic/angular';
import {LoginmodalPage} from '../loginmodal/loginmodal.page'
import { RegistermodalPage} from '../registermodal/registermodal.page';
import { Route } from '@angular/compiler/src/core';
import { Router } from '@angular/router';
 
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  modalController: any;


  constructor(public modalCtrl: ModalController, private router:Router) {

  }
//register modal page
async registermodal() {
  const modal = await this.modalController.create({
    component: RegistermodalPage
  });
  return await modal.present();
}
//dismiss modal 
dismiss() {
  // using the injected ModalController this page
  // can "dismiss" itself and optionally pass back data
  this.modalCtrl.dismiss({
    'dismissed': true
  });
}

//login modal page
async loginmodal() {
    const modal = await this.modalController.create({
      component: LoginmodalPage
    });
    return await modal.present();
  }
  moveToRegister(){
    this.router.navigate((['registermodal']));
  }
  moveToLogin(){
    this.router.navigate(['loginmodal']);
  }
}
