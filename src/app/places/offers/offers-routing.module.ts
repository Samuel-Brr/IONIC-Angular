import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OffersPage } from './offers.page';


// Pense à placer les route hardcoder (sans paramétres dynamiques) avant les routes dynamiques

const routes: Routes = [
  {
    path: '',
    component: OffersPage
  },
  {
    path: 'new',
    loadChildren: () => import('./new-offer/new-offer.module').then( m => m.NewOfferPageModule)
  },
  {
    path: 'edit/:placeId',
    loadChildren: () => import('./edit-offer/edit-offer.module').then( m => m.EditOfferPageModule)
  },
  {
    path: ':placeId',
    loadChildren: () => import('./offer-bookings/offer-bookings.module').then( m => m.OfferBookingsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class OffersPageRoutingModule {}
