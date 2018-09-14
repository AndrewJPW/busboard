import { FetchBusesService } from "./fetch-buses.service";

export class BusStopModel {

    //Data about a bus stop
    stopName: string;
    arrivals: Arrival[];
    
    constructor(n: string){
        this.stopName = n;

        let b1: Arrival;
        let b2: Arrival;
        let b3: Arrival;

        if(n == 'South Quay'){
            b1 = new Arrival(147,2,'Ilford');
            b2 = new Arrival(49,3,'Canary Wharf');
            b3 = new Arrival(25,5,'Oxford Circus');
        }
        else if(n == 'Bank'){
            b1 = new Arrival(147,2,'Dartford');
            b2 = new Arrival(49,3,'Lewisham');
            b3 = new Arrival(25,5,'Greenwich');
        }
        else{
            b1 = new Arrival(147,2,'Mottingham');
            b2 = new Arrival(49,3,'Lee');
            b3 = new Arrival(25,5,'Hither Green');
        }
        this.arrivals = [b1,b2,b3];
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