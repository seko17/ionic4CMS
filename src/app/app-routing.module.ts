import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import * as firebase from 'firebase/app';
import 'firebase/auth';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule),}, 
  { path: 'loginmodal', loadChildren: './loginmodal/loginmodal.module#LoginmodalPageModule' },
  { path: 'registermodal', loadChildren: './registermodal/registermodal.module#RegistermodalPageModule' },
  { path: 'landing', loadChildren: './landing/landing.module#LandingPageModule' },
  { path: 'view-room-details', loadChildren: './view-room-details/view-room-details.module#ViewRoomDetailsPageModule' },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
