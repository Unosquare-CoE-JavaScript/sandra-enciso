/*
SOLID.- 
Single responsability principle
Open / closed principles
Liskov Substitution principle
Interface segregation principle
Dependency inversion principle

//////
Lisvok Substitution principle
This principle states that if we have a parent class and a child class, then we can interchange the parent and child class without getting incorrect results.
This means that the child class must implement everything that’s in the parent class. The parent class serves the class has the base members that child classes extend from.

*/
/*
class Rectangle creates a new rectangle and calculates the area
*/
class Rectangle{
    constructor(width, height){
        this._width = width;
        this._height = height;
    }

    get width() { return this._width; }
    get height() { return this._height; }

    set width(value) { this._width = value; }
    set height(value) { this._height = value; }
    
    get area(){
        return this._width * this._height;
    }

    toString(){
        return `${this._width} * ${this._height}`;
    }
}

//class Square extends to Rectangle and can use get area method.
class Square extends Rectangle{
    constructor(size){
        super(size, size);
    }

    /* set the width and height of the parent (rectangle) as the same as the square  */
    set width(value){
        this._width = this._height = value;
    }

    set height(value){
        this.height = this._height = value;
    }
}

let useIt = function(rc){
    let width = rc._width;
    rc._height = 10;
    console.log(`Expected area of ${10*width}, 
        got ${rc.area}
    `);
}

let rc = new Rectangle(2, 3);
useIt(rc);
//console.log(rc.toString());

let sq = new Square(5);
useIt(sq);
/* console.log(sq.toString());
sq.width = 10;
console.log(sq.toString()); */