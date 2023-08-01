// oddorEven(121) = 1+2+1 = 4 //evenish
// oddorEven(41) = 4+1 = 5 //oddish

function oddishOrEvenish(num){
const digits = num.toString().split('').map(Number);

const sum = digits.reduce((acc,digit) => acc+ digit,0);

return sum % 2 === 0? "Evenish" : "Oddish";
}

console.log(oddishOrEvenish(121));