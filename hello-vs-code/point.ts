class Point {
    private _x:number = 0;
    private _y:number = 0;
    private _z:number = 0;

    constructor(p: {x:number, y:number, z?:number}) {
        this._x = p.x;
        this._y = p.y;
        this._z = p.z;
    }

    is3d():boolean {
        return this._z != 0;
    }
}

var p1 = new Point({x:10,y:20});
alert(p1.is3d());