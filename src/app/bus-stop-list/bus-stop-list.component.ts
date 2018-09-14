import { Component, OnInit } from '@angular/core';
import { BusStopModel} from '../BusStopModel';
import { Input } from '@angular/core';

@Component({
  selector: 'app-bus-stop-list',
  templateUrl: './bus-stop-list.component.html',
  styleUrls: ['./bus-stop-list.component.css']
})
export class BusStopListComponent implements OnInit {

  //stop: BusStopModel;
  stopList: BusStopModel[];
  stop: BusStopModel;

  constructor() { 
    let stop1: BusStopModel = new BusStopModel('South Quay');
    let stop2: BusStopModel = new BusStopModel('Bank');
    let stop3: BusStopModel = new BusStopModel('Canary Wharf');

    this.stopList = [stop1,stop2,stop3];
  }

  ngOnInit() {
  }

  clickOnStop(stop: BusStopModel){
    this.stop = stop;
  }

}
