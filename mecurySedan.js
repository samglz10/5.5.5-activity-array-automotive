//this includes the vehicle class as a module
const VehicleModule = require("./vehicle")

//this shows how to call from this module...
let v = new VehicleModule.Vehicle("Mecury", "Sedan", "1965", "color", "mileage");
console.log(v.make)

class Car extends VehicleModule {
    constructor (make, model, year, color, mileage) {
        this.maximnumPassengers = 5;
        this.passenger = 0;
        this.numberOfWheels = 4;
        this.maxinumSpeed = 160;
        this.fuel = 10;
        this.scheduleService = false;
        super(make, model, year, color, mileage);
    }

    super (makeCar);
}

/* I am assuming psuedo logic is in plain text, so here it goes

loadPassenger(nums) if loadPassenger is less than maxinumPassengers then there is availableRoom

start function if fule is greater than 0 then start equals true, else no start

scheduleService (nums) if mileage is greater than 3000, time for maintenance is true == else no service