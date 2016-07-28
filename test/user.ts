class User {

    fullname:string

    constructor(firstName:string,lastName:string){
        this.fullname = firstName + ' ' + lastName;
    }

    hello():string {
        return "Hello, " + this.fullname;
    }
}

let user = new User("Rodrigo","Peleias");
user.hello();