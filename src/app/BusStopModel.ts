export class BusStopModel {

    //Data about a bus stop
    stopName: string;
    arrivals: Arrival[];
    
    constructor(n: string){
        this.stopName = n;

        b1: Arrival;
        b2: Arrival;
        b3: Arrival;

        if(n == 'South Quay'){
            let b1: Arrival = new Arrival(147,2,'Ilford');
            let b2: Arrival = new Arrival(49,3,'Canary Wharf');
            let b3: Arrival = new Arrival(25,5,'Oxford Circus');
        }
        else if(n == 'Bank'){
            let b1: Arrival = new Arrival(147,2,'Dartford');
            let b2: Arrival = new Arrival(49,3,'Lewisham');
            let b3: Arrival = new Arrival(25,5,'Greenwich');
        }
        else{
            let b1: Arrival = new Arrival(147,2,'Mottingham');
            let b2: Arrival = new Arrival(49,3,'Lee');
            let b3: Arrival = new Arrival(25,5,'Hither Green');
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