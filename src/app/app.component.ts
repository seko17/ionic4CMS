import { Component } from '@angular/core';
import { Plugins } from '@capacitor/core';
import { firebaseConfig } from './credentials';
import * as firebase from 'firebase/app';
const { SplashScreen, StatusBar } = Plugins;

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  constructor() {
    this.initializeApp();
      const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      if (!user) {
        this.router.navigateByUrl("/loginmodal");
        unsubscribe();
      } else {
        this.router.navigateByUrl("/landing");
        unsubscribe();
      }
    });
  }

  initializeApp() {
    SplashScreen.hide().catch(error => {
    console.error(error);
    });
    StatusBar.hide().catch(error => {
    console.error(error);
    });
    firebase.initializeApp(firebaseConfig);
    }

}
