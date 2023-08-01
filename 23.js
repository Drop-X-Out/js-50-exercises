function createCounter(){
let count= 0;
return function(){
    return  ++count;
}
}

let counter = createCounter();

console.log(counter());
console.log(counter());
console.log(counter());