function receivesAFunction(callback) {
    return callback()
}
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("this is a named function");
        //take no arguments
        //return a named function
    }



}
function returnsAnAnonymousFunction() {
    return () => console.log('this is anonymous function which has no name');
}