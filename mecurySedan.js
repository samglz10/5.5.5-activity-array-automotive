//this includes the vehicle class as a module
const VehicleModule = require("./vehicle.js")

//this shows how to call from this module...
//let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
//console.log(v.make)

class Car extends VehicleModule.Vehicle {
    constructor (make, model, year, color, mileage) {
        super(make, model, year, color, mileage);
        this.maximnumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxinumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        
    }
    //loadPassenger(nums) if loadPassenger is less than maxinumPassengers then there is availableRoom
loadPassenger (num) {
    if (this.maximnumPassengers > this.passenger)
        return (this.passenger + num);
        else {
        console.log("No Available Room")
        }
}
//start function if fule is greater than 0 then start equals true, else no start

start () {
    if (this.fuel > 0 ) {
    console.log("Engine Start.") 
    } else {
        console.log("No Gaz")
    }
}
//scheduleService (nums) if mileage is greater than 3000, time for maintenance is true == else no service
scheduleService (num) {
    if (this.scheduleService > 3000) {
    console.log("Time for Service") 
    } else {
        console.log()
    }
}
}

//console.log(v.make);
// I am assuming psuedo logic is in plain text, so here it goes

