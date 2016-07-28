class User {
    fullname:string;

    constructor(firstname:string,lastname:string) {
        this.fullname = firstname + ' ' + lastname; 
    }

    hello():string {
        return "Hello, " + this.fullname;
    }

    bye():string {
        return "Bye Bye, " + this.fullname;
    }
}

var user = new User("Rodrigo","Peleias");
alert(user.hello());

enum Color {Red,Blue,Green};
var cores:Array<Color> = [Color.Red,Color.Blue,Color.Green]