/* eslint-disable no-underscore-dangle */
/* eslint-disable max-len */
import { Injectable } from '@angular/core';
import { Place } from './place.model';

@Injectable({
  providedIn: 'root'
})
export class PlacesService {

  private _places: Place[] = [
    new Place(
      'p1',
      'villa fdf',
      'jolie maison',
      'https://media.inmobalia.com/imgV1/B98Le8~d7M9k3DegigWkzHXQlgzMFGqGJJp6ZRUcpX033lqadFBp2i4GGW4X2J1jIJ9Pwc6GsJX5cPSdaZsIbALPEM2_r3C15jUErz~og~RGHM87ufUhI44f9NNAI3XP6r0IhCTGU6aiHFflLSdq3I_xX~O~_3yyUWDF99JdauhqNOPb9KJJ4oC3IWq_gJieLyswwQrbjM5szDvKJECIOItxBy9fHnB0M8qe3r6AMdJkDKpDUpJ5zMIhy7WE3OZR4SL4UQJd8uzGj0PcYtQyo7q58cjGtfMVj8HdkI4dzFbAiH5LbEqwbPifj5NJKw--.jpg',
      150
    ),
    new Place(
      'p2',
      'villa rauzan',
      'jolie habitation',
      'https://www.costas-casas.fr/db/huizen/1764/thumbnails/6026a1fc64b82.jpg.thumb3.jpg',
      200
    ),
    new Place(
      'p3',
      'Chalet montagne',
      'Cabane Cozie',
      'https://images.ctfassets.net/gxwgulxyxxy1/8H1DUaZYWI2eG20WS42c4/a29d35483b5ad97666b2e4e87ae1b919/front__2_.jpg',
      100
    ),
  ];

  constructor() { }

  get places() {
    // eslint-disable-next-line no-underscore-dangle
    return [...this._places];
  }

  getPlace(id: string){
    return {...this._places.find( p => p.id === id )};
  }

}
