function sevenBoom(arr){

    for(const num of arr){
        if(num.toString().includes("7")){
            return "Boom!";
        }
    }
    return "there is no 7 in this ARRAY"

}

console.log(sevenBoom([1, 2, 3, 4, 5, 6, 0]));