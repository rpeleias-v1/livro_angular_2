var User = (function () {
    function User(firstName, lastName) {
        this.fullname = firstName + ' ' + lastName;
    }
    User.prototype.hello = function () {
        return "Hello, " + this.fullname;
    };
    return User;
}());
var user = new User("Rodrigo", "Peleias");
user.hello();
