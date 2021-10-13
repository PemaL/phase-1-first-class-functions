function receivesAFunction(callbackFunction){
callbackFunction();
}

function returnsANamedFunction(){
    return function hello(){
    };
}

function returnsAnAnonymousFunction(){
    return (function(){ });
}
