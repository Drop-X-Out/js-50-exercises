const emailRegex = /^[a-zA-Z._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function validate(email){
    return emailRegex.test(email);
}

const email1 = "john@gmail.com";

console.log(validate(email1));