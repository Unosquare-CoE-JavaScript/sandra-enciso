/*
You are given an example of an inheritance hierarchy wich results in Cartesian-product duplication.
Please refactor this hierarchy, giving the base class Shape a constructor that takes a renderer, whose expected interface is:
class SomeRenderer
{
    get whatToRenderAs()
    {
        //todo
    }
}

There's no need to implement the type above (due to duck typing) but i do want you to implement classes VectorRenderer and RasterRender.
Each inheritor of the Shape class should have a constructor that takes a Renderer such that, subsequently, each constructured object's toString()
operates correctly, for example:
new Triangle(new RasterRenderer()) #returns "Drawing Triangle as pixels"
*/

class VectorRenderer {
    renderShape(shape) {
        return `Drawing ${shape} as lines`;
    }

}

class RasterRenderer {
    renderShape(shape) {
        return `Drawing ${shape} as pixels`;
    }

}

class Shape {
    constructor(name, renderer) {
        this.name = name;
        this.renderer = renderer;
    }

    toString() {
        return this.renderer.renderShape(this.name);
    }
}

class Triangle extends Shape {
    constructor(renderer) {
        super('triangle');
        this.renderer = renderer;
    }
}

class Square extends Shape {
    constructor(renderer) {
        super('square');
        this.renderer = renderer;
    }
}

let triangle = new Triangle(new RasterRenderer());
let message = triangle.toString();
console.log(message); //Drawing triangle as pixels

/*
SUMMARY
-Decouple abstraction from implementation
-Both can exist as hierarchies
-A stronger form of encapsulation
*/