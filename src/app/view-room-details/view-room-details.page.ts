import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';
@Component({
  selector: 'app-view-room-details',
  templateUrl: './view-room-details.page.html',
  styleUrls: ['./view-room-details.page.scss'],
})
export class ViewRoomDetailsPage implements OnInit {
  room;
  key;
  constructor(private router: ActivatedRoute) { 
    
    var user = firebase.auth().currentUser;
    if(user){
      this.router.paramMap.subscribe((param) =>{
        this.key = param.get('id');
        console.log(param)
      })
    }
  }

  ngOnInit() {
    console.log(this.key)
  }

}
