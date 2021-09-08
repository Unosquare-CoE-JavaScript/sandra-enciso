/*
Write a function called isSingleton(). This method takes a factory (ie. a function that returns an object); 
it's up to you to determine whether or not that object is a singleton instance or not.
*/
class SingletonTester {
    static isSingleton(factory) {
        var fact1 = factory();
        var fact2 = factory();

        return fact1 === fact2;
    }
}

/*
SUMMARY
A constructor can choose what to return; we can keep returning same instance
Monostate: many instances, shared data
Directly depending on the Singleton is a bad idea; introduce a dependency instead
*/