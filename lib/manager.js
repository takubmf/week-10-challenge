const Employee = require('./Employee');
const generateHTML = require("./generateHTML.js")
class Manager extends Employee{
    constructor(name, id, email, officeNumber){

        super(name, id, email);

        this.officeNumber = officeNumber;
    }

    getofficeNumber(){
        return this.officeNumber;
    }
    getHTML(){
        return generateHTML.manager(this);
    }

    getRole(){
        return 'Manager';
    }

}

module.exports = Manager;