import { Injectable } from '@angular/core';
import { BusStopModel } from './busstopmodel';
import { mergeMap } from 'rxjs/operators';
import { HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FetchBusesService {

  name: string;

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

  getStopById(id: string): BusStopModel{
    for(let stop of this.stopList){
      if(stop.id === id){
        return stop;
      }
    }
  }

  getStopByPostcode(postcode: string): BusStopModel {
    //Make API Call to Postcode.io
    //api.postcodes.io/postcodes/POSTCODE

    return this.getStopByLonLat(0,0);
  }

  getStopByLonLat(lon: number, lat:number): BusStopModel {
    //Make API Call to TFL.gov.uk

    return this.stopList[0];
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