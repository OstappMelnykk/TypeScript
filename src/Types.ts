
//JavaScript stack typesJavaScript stack types
let type1: number;
let type2: string;
let type3: boolean;
let type4: null;
let type5: undefined;
let type6: object;

//TypeScript extends the JavaScript stack types
let type7: any;
let type8: unknown;
let type9: never;
//Also in use but in other way
//let type10: enum;
//let type11: tuple;

//type10: enum
enum Size{ Small = 's', Medium = 1, Large = 'l' }
let type11: [number, string]; //tuple
let type12: number[]

/////////////////////////////////////////////////


let mySize : Size = Size.Large
console.log(mySize)

type11 = [1, "ostap"]

type12 = [1, 2, 3]
type12.forEach((item : number) => {
    console.log(item)
})


