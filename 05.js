let str = "Hello World";


function reverseString(str){
    return str.split("").reverse().join("");
}

console.log(reverseString(str))