type MyTuple = [number, string, null];
const newTuple1: MyTuple = [1, "2", null]
const newTuple2: [number, string, null] = [1, "2", null]

const newUser: {
    name:string,
    age: number,
    address: {
        city: string
        country: string
    }
} = {
    name: "ostap",
    age: 24,
    address: {
        city: "Lviv",
        country: "Ukraine"
    }
}