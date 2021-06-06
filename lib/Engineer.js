// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`
// * `github`&mdash;GitHub username
// * `getGithub()`
// * `getRole()`&mdash;overridden to return `'Engineer'`

const Employee = require("./Employee");

class Engineer extends Employee {

    constructor(fullname, id, email, github){
        super(fullname, id, email);
        this.github = github;
    }

    getGithub(){
        return this.github;
    }

    getRole() {
        return "Engineer";
    }

}

module.exports = Engineer;