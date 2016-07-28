class User {
    constructor(firstname, lastname) {
        this.fullname = firstname + ' ' + lastname;
    }
    hello() {
        return "Hello, " + this.fullname;
    }
    bye() {
        return "Bye Bye, " + this.fullname;
    }
}
var user = new User("Rodrigo", "Peleias");
alert(user.hello());
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
;
var cores = [Color.Red, Color.Blue, Color.Green];
//# sourceMappingURL=user.js.map