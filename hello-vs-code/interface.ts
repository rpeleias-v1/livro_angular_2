interface Point {
    x: number;
    y: number;
    z: number;
}

/*class point3d implements Point {

} */

class Fee {

    buildName(firstName:string, lastName? : string ){

    }
    static alertName(firstName: string, ...restOfName: string[]) {
        alert(firstName + " " + restOfName.join(" "));
    }
}

var fee = new Fee();
fee.buildName("Rodrigo");
fee.buildName("Rodrigo", "Peleas");

Fee.alertName("Fulano", "de", "tal");