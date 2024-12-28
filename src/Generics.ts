namespace Generics {
    function entity<T> (args: T): T{
        return args
    }

    entity<number>(1);
    entity<string>("str");

    const entity2 = <T>(args: T): T => {
        return args
    }

    entity2<number>(1);
    entity2<string>("str");

    const entity3: <T>(args: T) => T = <T>(args: T): T => {
        return args
    }

    entity3<number>(1);
    entity3<string>("str");


//////////////////////////////////////////////////////////////////


    interface IPair<K, V> {
        key: K;
        value: V;
    }

    const pair1: IPair<string, number> = {
        key: "1",
        value: 1
    }
    const pair2: IPair<number, number> = {
        key: 1,
        value: 1
    }


//////////////////////////////////////////////////////////////////

    class Channel<T> {
        private name: T;

        constructor(name: T) {
            this.name = name;
        }

        getName(): T{
            return this.name;
        }
    }

    new Channel<number>(2);
    new Channel<string>("RED group");
}
