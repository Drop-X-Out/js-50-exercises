const person = {
    name:"Zayn",
    age:20,

    introduce:function(){
        return `Hi my name is ${this.name} and i m ${this.age} year old`
    }
}

const student = Object.create(person);
student.studentId= '12345';


console.log(student.name)
console.log(student.studentId);

console.log(person);

console.log(student.introduce())

