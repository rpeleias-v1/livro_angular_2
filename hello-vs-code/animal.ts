class Animal {
    name:string;
    
    constructor(theName:string) {
        this.name = theName;
    }

    move(meters: number = 0) {
        alert(this.name + " moved " + meters + "m.");
    }
}

class Snake extends Animal {
    constructor(name:string) {
        super(name);
    }
    move(meters = 5) {
        alert("Slightering...");
        super.move(meters);
    }
}

class Horse extends Animal {
    constructor(name:string) {
        super(name);
    }

    move(meters=45) {
        alert("Galloping...");
        super.move(meters);
    }
}

var sam = new Snake("Sammy the problem");
var tom:Animal = new Horse("Palotino");

sam.move();
tom.move(34);