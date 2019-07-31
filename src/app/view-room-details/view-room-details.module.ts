import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ViewRoomDetailsPage } from './view-room-details.page';

const routes: Routes = [
  {
    path: '',
    component: ViewRoomDetailsPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ViewRoomDetailsPage]
})
export class ViewRoomDetailsPageModule {}
