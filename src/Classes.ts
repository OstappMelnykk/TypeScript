namespace Classes {

    class Car{

        private name: string
        protected price: number

        constructor(name: string, price: number){
            this.name = name
            this.price = price
        }

        public getInfo(): string {
            return this.name + " " + this.price
        }

        public GetName(): string {
            return this.name
        }

        public SetName(name: string) : void {
            this.name = name
        }


    }

    class Buss extends Car{
        constructor(name: string, price: number){
            super(name, price)
        }

        public GetPrice(): number {
            return this.price
        }

        public SetPrice(price: number) : void {
            this.price = price
        }


    }

    const car: Car = new Car("BMV", 20_000)
    /*console.log(car.name)*/
    /*console.log(car.price)*/
    console.log(car.getInfo())


    const bus: Buss = new Buss("Bussss", 100_000)
    console.log(bus.getInfo())

    console.log(bus.GetName())
    bus.SetName("MAN")
    console.log(bus.GetName())


    console.log(bus.GetPrice())
    bus.SetPrice(200_000)
    console.log(bus.GetPrice())



}