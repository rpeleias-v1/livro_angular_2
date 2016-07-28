class Pessoa {
    private _password: string;

    
    get password() : string {
        return this._password
    }

    
    set value(v : string) {
        if (v != '12345') {
            this._password = v;
        } else {
            alert("Ei, senha não pode ser 12345");
        }
    }
}

var p = new Pessoa();
p.password = "12345";