class Car{

    name: string
    price: number

    constructor(name: string, price: number){
        this.name = name
        this.price = price
    }

    getInfo(): string{
        return this.name + " " + this.price
    }
}

const car: Car = new Car("BMV", 20_000)
console.log(car.getInfo())
