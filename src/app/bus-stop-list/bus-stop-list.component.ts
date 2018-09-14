import { Component, OnInit } from '@angular/core';
import { BusStopModel} from '../BusStopModel';
import { Input } from '@angular/core';
import { FetchBusesService } from '../fetch-buses.service';

@Component({
  selector: 'app-bus-stop-list',
  templateUrl: './bus-stop-list.component.html',
  styleUrls: ['./bus-stop-list.component.css']
})
export class BusStopListComponent implements OnInit {

  //stop: BusStopModel;
  stopList: BusStopModel[];
  stop: BusStopModel;

  constructor(private fetchBuses: FetchBusesService) { 
    this.stopList = fetchBuses.getStops();
  }

  ngOnInit() {
  }

  clickOnStop(stop: BusStopModel){
    this.stop = stop;
  }

}
