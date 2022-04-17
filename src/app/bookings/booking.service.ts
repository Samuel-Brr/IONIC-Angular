/* eslint-disable no-underscore-dangle */
import { Injectable } from '@angular/core';
import { Booking } from './booking.model';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  private _bookings: Booking[] = [
    {
      id: 'yxz',
      placeId: 'p1',
      placeTitle: 'villa fdf',
      guestNumber: 2,
      userId: 'abc'
    }
  ];

  constructor() { }

  get bookings(){
    return [...this._bookings];
  }

}
