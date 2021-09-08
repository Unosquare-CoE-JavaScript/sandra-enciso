/*
FACTORY
A component responsible solely for the wholesale (not piecewise) cretion of objects.
Is basically a static method which is like a constructor but more expressive than constructor. You can have lots of different factory methods with different names,
differently named arguments as well.
A separate class with factory methods is a Factory
Class hierarchies can have corresponding hierarchies of factories (Abstract Factory)
Object creation logic becomes too convoluted
Initializar is not descriptive
    Name is always _init_
    Cannot overload with same sets of arguments with diferent names
    Can turn into 'optional parameter hell'
Wholesale object creation (non-piecewise, unlike Builder) can be outsourced to
    A separate method (Factory Method)
    That may exist in a separate class (Factory)
    Can create hierarchy of factories with Abstract Factory

*/

//This example create points in a x,y plane and the user can expecify if must use cartesian or polar coordinates
CoordinateSystem = {
    CARTESIAN : 0,
    POLAR : 1
};

class Point //creates a new point
{
    constructor(x, y)
    {
        this.x = x;
        this.y = y;
    }

    // constructor(a, b, cs=CoordinateSystem.CARTESIAN)
    // {
    //   switch (cs)
    //   {
    //     case CoordinateSystem.CARTESIAN:
    //       this.x = a;
    //       this.y = b;
    //       break;
    //     case CoordinateSystem.POLAR:
    //       this.x = a * Math.cos(b);
    //       this.y = a * Math.sin(b);
    //       break;
    //   }
    //
    //   // steps to add a new system
    //   // 1. augment CoordinateSystem
    //   // 2. change ctor
    // }

    static newCartesianPoint(x, y) //Returns in cartesian coordinates
    {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta) //Returns in polar coordinates
    {
        return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
    }

    static get factory()
    {
        return new PointFactory();
    }
}

class PointFactory //Pint factory
{
    // not necessarily static
    newCartesianPoint(x, y)
    {
        return new Point(x, y);
    }

    static newPolarPoint(rho, theta)
    {
        return new Point(rho*Math.cos(theta), rho*Math.sin(theta));
    }
}

let p1 = new Point(2, 3, CoordinateSystem.CARTESIAN); //here you must to specify the time of coordinate system
console.log(p1);
// Point → PointFactory
let p2 = PointFactory.newPolarPoint(5, Math.PI/2); //this is factory
console.log(p2);

// this line will not work if newCartesianPoint is static!
let p3 = Point.factory.newCartesianPoint(2, 3);
console.log(p3);