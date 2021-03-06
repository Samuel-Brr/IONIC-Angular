import { Component, OnInit } from '@angular/core';
import { IonItemSliding } from '@ionic/angular';
import { Place } from '../place.model';
import { PlacesService } from '../places.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-offers',
  templateUrl: './offers.page.html',
  styleUrls: ['./offers.page.scss'],
})
export class OffersPage implements OnInit {

  loadedOffers: Place[];

  constructor(private placesService: PlacesService,
      private router: Router) { }

  ngOnInit() {
    this.loadedOffers = this.placesService.places;
  }

  // onEdit(offerId: string, slider: IonItemSliding){
  //   slider.close();
  //   this.router.navigate(['/', 'places', 'tabs', 'offers', 'edit', offerId]);
  //   console.log('Editing item', offerId);
  // }
}
