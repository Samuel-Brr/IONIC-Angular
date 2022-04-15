import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { tap } from 'rxjs';
import { Place } from './../../place.model';
import { PlacesService } from './../../places.service';

@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
})
export class PlaceDetailPage implements OnInit {

  place: Place;

  constructor(private router: Router,
      private route: ActivatedRoute,
      private placeService: PlacesService,
      private navCtrl: NavController) { }

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

  onBookPlace(){
    // this.router.navigateByUrl('/places/tabs/discover');
    this.navCtrl.navigateBack('/places/tabs/discover');
  }

}
