/*

*/
//Node class stores lots of links to other nodes
class Node
{
    constructor(value, left=null, right=null) //takes the value and the left and right children
    {
        //The parent of left and right is the current class
        this.value = value;
        this.left = left; 
        this.right = right;
        this.parent = null;

        if (this.left)
            left.parent = this;
        if (this.right)
            right.parent = this;
    }
}

/*Doing the iterator of a node */
function makeInOrderIterator(root)
{
    // go to leftmost
    let current = root;
    while (current.left) { //Go to the left most element
        current = current.left;
    }
    let yieldedStart = false; //flag that indicates whether or not I've yielded the starting value.

    return {
        next: function() {
            if (!yieldedStart)
            {
                yieldedStart = true;
                return {
                value: current,
                done: false
                };
            }
            if (current.right)
            {   //find the letmost element
                current = current.right;
                while (current.left)
                {
                    current = current.left;
                }
                return {
                    value: current,
                    done: false
                };
            }
            else
            {
                let p = current.parent;
                while (p && current === p.right) //while we aren't at the parent node
                {
                    current = p;
                    p = p.parent;
                }
                current = p;
                return {
                    value: current,
                    done: current == null
                };
            }
        }, // next

        // this makes the iterator iterable
        [Symbol.iterator]: function() { return this; }
    };
}

class BinaryTree
{
    constructor(rootNode)
    {
        this.rootNode = rootNode;
    }

    // assuming only one form of iteration
    [Symbol.iterator]()
    {
        return makeInOrderIterator(this.rootNode);
    }

    /* JavaScript uses the star symbol (*) to indicate that the function you're working with is going to have the yield keyword usage when returning elements 
    And allow us to use recursion.
    */
    * betterInOrder()
    {
        function* traverse(current)
        {
            /* In the left side to this tree, yield the current element */
            if (current.left)
            {
                for (let left of traverse(current.left))
                yield left;
            }
            yield current;
            if (current.right)/* In the right side to this tree, yield the current element */
            {
                for (let right of traverse(current.right))
                yield right;
            }
        }
        for (let node of traverse(this.rootNode))
            yield node;
    }

    get inOrder()
    {
        return makeInOrderIterator(this.rootNode);
    }
}

//   1
//  / \
// 2   3

// in-order:  213
// preorder:  123
// postorder: 231

let root = new Node(1, new Node(2), new Node(3));

// c++ style
let it = makeInOrderIterator(root);
let result = it.next(); //Iterating without using [Symbol.iterator]. In case makeOrderITerator doesn't return [Symbol.iterator]
while (!result.done)
{
  console.log(result.value.value);
  result = it.next();
}

let tree = new BinaryTree(root);

for (let x of tree)
  console.log(x.value); //printing without using [Symbol.iterator]

console.log([...tree].map(x => x.value));

console.log([...tree.inOrder].map(x => x.value));

// a generator is both an iterator and iterable
console.log('using a generator...');
console.log([...tree.betterInOrder()].map(x => x.value));

for (let x of tree.betterInOrder())
  console.log(x.value);

