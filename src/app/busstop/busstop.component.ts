import { Component, OnInit } from '@angular/core';
import { BusStopModel } from '../BusStopModel';

@Component({
  selector: 'app-busstop',
  templateUrl: './busstop.component.html',
  styleUrls: ['./busstop.component.css']
})
export class BusstopComponent implements OnInit {

  stop: BusStopModel;

  constructor() { 
    this.stop = new BusStopModel();
  }

  ngOnInit() {
  }

}
