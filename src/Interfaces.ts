interface IUser {
    name: string
    email: string
}

const user1: IUser = {
    email: "1212MyEmail@example.net",
    name: "ostap"
}
///////////////////////////////////////////////
type TypeUser = {
    name: string
    email: string
}

const user2: TypeUser = {
    email: "1212MyEmail@example.net",
    name: "ostap"
}