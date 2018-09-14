import { Component, OnInit, Input } from '@angular/core';
import { BusStopModel } from '../busstopmodel';

@Component({
  selector: 'app-busstop',
  templateUrl: './busstop.component.html',
  styleUrls: ['./busstop.component.css']
})
export class BusstopComponent implements OnInit {

  @Input() stop: BusStopModel;

  constructor() {  
  }

  ngOnInit() {
  }

}
