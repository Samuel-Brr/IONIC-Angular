import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Place } from './../../place.model';
import { PlacesService } from './../../places.service';

@Component({
  selector: 'app-offer-bookings',
  templateUrl: './offer-bookings.page.html',
  styleUrls: ['./offer-bookings.page.scss'],
})
export class OfferBookingsPage implements OnInit {

  place: Place;

  constructor(private route: ActivatedRoute,
      private placeService: PlacesService,
      ) { }

  ngOnInit() {

    this.route.params
      .pipe(
        tap((params: {placeId: string}) => {
          console.log(params);
          this.place = this.placeService.getPlace(params.placeId);
        })
      )
      .subscribe();

  }

}
