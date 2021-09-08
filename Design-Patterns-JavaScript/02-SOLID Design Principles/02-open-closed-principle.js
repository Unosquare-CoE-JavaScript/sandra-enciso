/*
SOLID.- 
Single responsability principle
Open / closed principles
Liskov Substitution principle
Interface segregation principle
Dependency inversion principle

//////

The open/closed principle states that a piece of software is open for extension (inherits) but closed for modification.

*/
/*
The Object.freeze() method freezes an object. A frozen object can no longer be changed; freezing an object prevents new properties from being added to it, 
existing properties from being removed, prevents changing the enumerability, configurability, or writability of existing properties, 
and prevents the values of existing properties from being changed. In addition, freezing an object also prevents its prototype from being changed. 
freeze() returns the same object that was passed in.
*/

let Color = Object.freeze({
    red: 'red',
    green: 'green',
    blue: 'blue'
});

let Size = Object.freeze({
    small: 'small',
    medium: 'medium',
    large: 'large'
});

/* class Product creates new products. Properties: name, color, size */
class Product{
    constructor(name, color, size){
        this.name = name;
        this.color = color;
        this.size = size;
    }
}
/*
Open 
*/
/*
The filter() method creates a new array with all elements that pass the test implemented by the provided function.
*/
//Filter the products
class ProductFilter{
    filterByColor(products, color){
        return products.filter(p => p.color === color);
    }

    filterBySize(products, size){
        return products.filter(p => p.size === size);
    }

    filterBySizeAndColor(products, size, color){
        return products.filter(p => {
            p.size === size && p.color === color;
        });
    }

    //state space explosion
    /*
    Meanig that this entire approach doesn't work to infinity.
    */
}

//specification
/* class Specification{
    constructor(){
        if(this.constructor.name === 'Specification'){
            throw new Error('Specification is abstract!');
        }
    }

    isSatisfied(item){}
} */

class ColorSpecification{
    constructor(color){
        this.color = color;
    }

    isSatisfied(item){
        return item.color === this.color;
    }
}

class SizeSpecification {
    constructor(size){
        this.size = size;
    }

    isSatisfied(item){
        return item.size === this.size;
    }
}

/*
Spread syntax (...) allows an iterable such as an array expression or string to be expanded in places where zero or more arguments (for function calls) 
or elements (for array literals) are expected, or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.
*/
class AndSpecification{
    constructor(...specs){
        this.specs = specs;
    }

    /*
    The every() method tests whether all elements in the array pass the test implemented by the provided function. It returns a Boolean value.
    */
    isSatisfied(item){
        return this.specs.every(x => x.isSatisfied(item));
    }
}

let apple = new Product('Apple', Color.green, Size.small);
let tree = new Product('Tree', Color.green, Size.large);
let house = new Product('House', Color.blue, Size.large);

let products = [apple, tree, house];

let pf = new ProductFilter();
console.log('Green products (old):');
for(let p of pf.filterByColor(products, Color.green)){
    console.log(`*${p.name} is green`);
}

/////Using new filtering

class BetterFilter{
    filter(items, spec){
        return items.filter(x => spec.isSatisfied(x));
    }
}

let bf = new BetterFilter();
console.log('Green products (new):');
for(let p of bf.filter(
    products, new ColorSpecification(Color.green)
)){
    console.log(`*${p.name} is green`);
}

//////Using spec
console.log('Large and green products:');
let spec = new AndSpecification(
    new ColorSpecification(Color.green),
    new SizeSpecification(Size.large)
);

for (let p of bf.filter(products, spec)){
    console.log(`*${p.name} is green`);
}
