//0 1 2 3 5 8 ... n
// n =5
//5
//n = 6 (8)

function fibonacci(n){
if(n<=1){
    return n;
}
else{
    return fibonacci(n-1)+fibonacci(n-2)
}
}

console.log(fibonacci(3))

//fib(2)+fib(1)
//fib(2)+1
//1+1