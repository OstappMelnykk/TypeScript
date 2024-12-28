namespace UtilityTypes {
    interface ICar {
        id: number;
        name: string;
        price: number;
        yearBuilt: number;
    }

    interface ICarCreate extends Omit<ICar, 'id'> { }
    interface ICarId extends Pick<ICar, 'id'> { }
    interface IOptionalCar extends Partial<ICar> { }
    interface IReadonlyCar extends Readonly<ICar> { }
    interface IRequiredCar extends Required<ICar> { }


    type TypeCar = Record<'name' | "price", string | number>





    const car1: ICarCreate = {
        name: "Car",
        price: 5000,
        yearBuilt: 2002,
    }

    const car2: ICarId = {
        id: 1,
    }

    const car3: IOptionalCar = { }

    const car4: IReadonlyCar = {
        id: 1,
        name: "Car",
        price: 5000,
        yearBuilt: 2002,
    }

    // car4.name = "Car";  // error

    const car5: IRequiredCar = {
        id: 1,
        name: "Car",
        price: 5000,
        yearBuilt: 2002,
    }

    car5.name = "Car"; // OK
}