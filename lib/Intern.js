// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`
// * `school`
// * `getSchool()`
// * `getRole()`&mdash;overridden to return `'Intern'`

const Employee = require("./Employee");

class Intern extends Employee {

    constructor(fullname, id, email, school){
        super(fullname, id, email);
        this.school = school;
    }

    getSchool() {
        return this.school;
    }

    getRole() {
        return "Intern";
    }
}

module.exports = Intern;