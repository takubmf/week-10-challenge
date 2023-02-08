const Employee = require('./Employee');
const generateHTML = require("./generateHTML.js")

class Engineer extends Employee{
    constructor(name, id, email, github){

        super(name, id, email);

        this.github = github;
    }

    getgithub(){
        return this.github;
    }
    getHTML(){
        return generateHTML.engineer(this);
    }

    getRole(){
        return 'Engineer';
    }

}

module.exports = Engineer;