class Vehicle {

    // public color : string

    constructor(public color : string){
        // this.color = color;
    }

    public drive() : void{
        console.log('Driving...')
    }

    static summary() : string {
        return `I am a vehicle`
    }
}

class Car extends Vehicle{

    constructor(public wheels: number , color: string){
        super(color)
    }

    public start() : void{
        console.log('Starting...')
    }
}

const car : Car = new Car(4 , 'Red');

car.start()
car.drive()


console.log(Vehicle.summary())