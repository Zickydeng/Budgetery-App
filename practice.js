//Practicing with class and function constructor.main

var Person5 = function(name, yearOfBirth,
job) {
    this.name = name;
    this.yearOfBirth = yearOfBirth;
    this.job = job;
}

Person5.prototype.calculateAge = 
function(){
    var age = new Date().getFullYear - this.yearOfBirth;
    console.log(age);
}

var zicky5 = new Person5('Zicky', 1992, 'Programmer');


//ES6 Class creation 

class Person6 {
    constructor (name, yearOfBirth, job) {
        this.name = name;
        this.yearOfBirth = yearOfBirth;
        this.job = job;

    }
    calculateAge() {
        var age = new Date().getFullYear - this.yearOfBirth;
        console.log(age);
    }
}
