import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-new-offer',
  templateUrl: './new-offer.page.html',
  styleUrls: ['./new-offer.page.scss'],
})
export class NewOfferPage implements OnInit {

  constructor(private router: Router,
    private navCtrl: NavController) { }

ngOnInit() {
}

onBookOffer(){
  // this.router.navigateByUrl('/places/tabs/discover');
  this.navCtrl.navigateBack('/places/tabs/offers');
}
}
