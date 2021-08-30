/*
Encompasses Boxing, primitive to object ,length
*/
/*
Boxing
In JavaScript, primitives values don't have methods or properties, so if you want to use them, you need to use a wrapper.
Boxing is wrapping a primitive value in an Object. When you treat a primitive type like if it were an object, eg. calling to
the toLowerCase function, JavaScript would wrap the primitive type into the corresponding object.
This new object is then linked to the related build-in <.prototype>, so you can use prototype methods on primitive types.
*/

/*
The length property of a String object contains the length of the string, in UTF-16 code units. 
length is a read-only data property of string instances
*/

//Type of coercion: primitive to object
//Boxing the element to use length method
if (studentNameElem.value.length > 50) {
    console.log("Student's name too long.");
}