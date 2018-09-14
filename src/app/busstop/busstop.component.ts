import { Component, OnInit, Input } from '@angular/core';
import { BusStopModel } from '../busstopmodel';
import { ActivatedRoute} from '@angular/router';
import { FetchBusesService } from '../fetch-buses.service';

@Component({
  selector: 'app-busstop',
  templateUrl: './busstop.component.html',
  styleUrls: ['./busstop.component.css']
})
export class BusstopComponent implements OnInit {

  //@Input() stop: BusStopModel;
  stop: BusStopModel;

  constructor(private fetchBus: FetchBusesService, private route: ActivatedRoute) {  
  }

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    this.stop = this.fetchBus.getStopById(id);
  }

}
