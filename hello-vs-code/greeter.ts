class Greeter {
    private greeting:string;

    constructor(message:string) {
        this.greeting = message;
    }

    public greet() {
        return "Hello, " + this.greeting;
    }
}

var greeting:Greeter = new Greeter("world");
greeting.greet();