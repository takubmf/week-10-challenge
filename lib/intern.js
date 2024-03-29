const Employee = require('./Employee');
const generateHTML = require("./generateHTML.js")

class Intern extends Employee{
    constructor(name, id, email, school){

        super(name, id, email);

        this.school = school;
    }

    getschool(){
        return this.school;
    }
    getHTML(){
        return generateHTML.intern(this);
    }

    getRole(){
        return 'Intern';
    }

}

module.exports = Intern;