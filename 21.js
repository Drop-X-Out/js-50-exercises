function factorial(n){
    if(n ===1 ){
        return 1;
    }
    else{
        return n*(factorial(n-1))
    }
}

console.log(factorial(5));

// 5 * factorial(5-1)
// 4* factorial(4-1)
// 3* factorial(3-1)
// 2* factorial(2-1)
// 1