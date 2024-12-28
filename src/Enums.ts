namespace Enums {
    enum EnumRoles{
        ADMIN, GUEST, USER
    }

    const enum EnumColors{
        black, pink, green
    }

    /*
    Difference between `const` and regular enums after compilation into JS.
    As you can see, using the keyword "const" simplifies the compilation process from TS to JS.


        "use strict";
        var EnumRoles;
        (function (EnumRoles) {
            EnumRoles[EnumRoles["ADMIN"] = 0] = "ADMIN";
            EnumRoles[EnumRoles["GUEST"] = 1] = "GUEST";
            EnumRoles[EnumRoles["USER"] = 2] = "USER";
        })(EnumRoles || (EnumRoles = {}));
        const user = {
            role: EnumRoles.ADMIN,
            color: 0,
        };
    */


    interface IUser{
        role: EnumRoles;
        color: EnumColors
    }

    const user : IUser = {
        role: EnumRoles.ADMIN,
        color: EnumColors.black,
    }
}
