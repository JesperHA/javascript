abstract class Shape {
    private _color:string;

    constructor(color:string){
        this._color = color;
    }

    get color(): string{
        return this._color
    }

    set color(value: string) {
        this._color = value
    }

    abstract get area():number;
    abstract get perimeter(): number;

    toString(): string{
        return (`color: ${this._color}, area: ${this.area}, perimeter: ${this.perimeter}`)
    }
}
// Man kan ikke lave en instance af en abstract class, man kan kun inherit den i andre classes.
  
class Circle extends Shape {

    private _radius: number

    constructor(color:string, radius:number){
        super(color);
        this._radius = radius
    }

    get area(): number {
        return Math.PI * (this.radius ** 2)
    }
    get perimeter(): number {
        return Math.PI * (this.radius * 2)
    }


    set radius(value: number){
        this._radius = value
    }

    get radius(): number {
        return this._radius
    }

    toString(): string{
        return (`color: ${this.color}, area: ${this.area}, perimeter: ${this.perimeter}`)
    }
    
}

let shape1: Shape = new Circle("Black", 20)

console.log(shape1.toString())


class Cylinder extends Circle {

    private _height: number

    constructor(color: string, radius: number, height: number) {
        super(color, radius);
        this._height = height

    }

    get volume(): number {
        return Math.PI * (this.radius ** 2) * this._height
    }

    get perimeter(): number {
        throw new Error("not implemented!")
    }

    set height(value: number){
        this._height = value
    }

    get height(): number {
        return this._height
    }

    toString(): string{
        return (`color: ${this.color}, volume: ${this.volume}`)
    }

}

let cylinder1: Circle = new Cylinder("brown", 20, 5)

console.log(cylinder1.toString())
