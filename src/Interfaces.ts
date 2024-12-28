namespace Interfaces {

    interface IUserAge {
        age: number;
    }


    interface IUser extends IUserAge{
        name: string
        email: string
    }

    const user1: IUser = {
        email: "1212MyEmail@example.net",
        name: "ostap",
        age: 22,
    }


}