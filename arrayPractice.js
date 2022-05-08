class Car {
    constructor(make, model, color, type, year) {
      this.make = make;
      this.model = model;
      this.color = color;
      this.type = type;
      this.year = year;
      }
      drive () {
        console.log('drive');
    
      }
  
    }
  
  let newHonda = new Car("Honda","Civic", "Green", "Coupe", "1999")
  //use node arrayPractice in terminal to test
    console.log(newHonda);

