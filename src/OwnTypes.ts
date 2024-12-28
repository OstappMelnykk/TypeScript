namespace OwnTypes {
    type UserType = {
        name:string,
        age: number,
        address: AddressType
    }
    type AddressType = {
        city: string
        country: string
    }

    let myUser: UserType;
    let myAddress: AddressType;

    myAddress = {
        city: "Lviv",
        country: "Ukraine"
    }

    myUser = {
        name: "ostap",
        age: 24,
        address: myAddress
    }



}