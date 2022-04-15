import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { tap } from 'rxjs';
import { Place } from '../../place.model';
import { PlacesService } from '../../places.service';

@Component({
  selector: 'app-edit-offer',
  templateUrl: './edit-offer.page.html',
  styleUrls: ['./edit-offer.page.scss'],
})
export class EditOfferPage implements OnInit {


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
