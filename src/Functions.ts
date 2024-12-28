

function myFunction (str: string): string {
    return "_" + str + "_";
}

const myObject = {
    myFunction(str: string): string {
        return "_" + str + "_";
    }
};


const Foo0 = (str: string) => {
    return "_" + str + "_";
};

const Foo1: (str: string) => string = (str: string) => {
    return "_" + str + "_";
};

type MyReturnType = (str: string) => string

const Foo2: MyReturnType = (str: string) => {
    return "_" + str + "_";
};






type TypeChannelReturn = {
    name: string
}

function getChannel(name: string): TypeChannelReturn{
    return {name}
}

type TypeChannelFunction = (name: string) => TypeChannelReturn


const getChannelName: TypeChannelFunction = name  => {
    return { name }
}

const getNumbers = (...numbers: number[]) => {
    return numbers
}
