import { Injectable } from '@angular/core';
import { BusStopModel } from './busstopmodel';

@Injectable({
  providedIn: 'root'
})
export class FetchBusesService {

  name: string;
  arrivals: Arrival[];

  stopList: BusStopModel[] = [
    new BusStopModel('South Quay'),
    new BusStopModel('Bank'),
    new BusStopModel('Canary Wharf')
  ];

  constructor() { }

  // Return the arrivals list
  getStops(): BusStopModel[] {
    return this.stopList;
  }

}

export class Arrival {
  busNumber: number;
  busDepart: number;
  destination: string;

  constructor(n: number, dp: number, de: string){
      this.busNumber = n;
      this.busDepart = dp;
      this.destination = de;
  }

}