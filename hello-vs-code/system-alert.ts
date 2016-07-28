class SystemAlert {

    static alert(message:string):void {
        alert(message);
    }

    static warm(message:string):void {
        alert("Atenção: " + message);
    }

    static error(message:string):void {
        alert("Error: " + message);
    }
}

SystemAlert.alert("Oi");
SystemAlert.error("Não foi possível conectar na base de dados");