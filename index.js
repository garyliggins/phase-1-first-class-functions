const receivesAFunction = (callBack) => {
    return callBack();
}

function returnsANamedFunction () {

  return function named(){
        console.log('hello')
    }
}

function returnsAnAnonymousFunction () {
    return () => {
        console.log('anonymous')
    }
}


function callBack() {
    console.log("the callback I was looking for ")
}