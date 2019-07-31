import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/user/auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  db = firebase.firestore();
public hotelList: Array<any>;

  constructor(public navCtrl: NavController, private authService: AuthService,private router : Router) {
    var user = firebase.auth().currentUser;

    console.log(user.uid)
 
  }
  ngOnInit() {
    this.db.collection('Room').get().then(res =>{
      this.hotelList = [] ;
     res.forEach(doc =>{
       console.log(doc.data()); 
this.hotelList.push({

Description : doc.data().Description,
image : doc.data().imageUrl,
HotelName: doc.data().HotelName,

});
     })
    })
    }

    viewRoom(key){
    this.router.navigate(['/view-room-details',key]);
    }
}
