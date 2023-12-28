function receivesAFunction(callback) {
    return callback()
}
function returnsANamedFunction() {
    return function namedFunction() {
        console.log("this is a named function");
    }



}
function returnsAnAnonymousFunction() {
    return () => console.log('this is anonymous function');
}