// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`
// * `officeNumber`
// * `getRole()`&mdash;overridden to return `'Manager'`

const Employee = require("./Employee");

class Manager extends Employee {

    constructor(fullname, id, email, officeNumber){
        super(fullname, id, email);
        this.officeNumber = officeNumber;
    }

    getOfficeNumber() {
        return this.OfficeNumber; 
    }

    getRole() {
        return "Manager";
    }

}

module.exports = Manager;