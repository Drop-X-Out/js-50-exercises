function findLargestElement(arr){
return arr.reduce((max,current)=>
    current > max ? current :max)
}
let arr= [1,2,10,20,10,5,16];
let reduce = findLargestElement(arr);

console.log(reduce)