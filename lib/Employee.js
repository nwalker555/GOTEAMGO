// The first class is an `Employee` parent class with the following properties and methods:
// * `getName()`
// * `getId()`
// * `getEmail()`
// * `getRole()`&mdash;returns `'Employee'`

class Employee {

    constructor(fullname, id, email){
        this.fullname = fullname;
        this.id = id;
        this.email = email;
    }

getName() {
    return this.fullname;
}

getId() {
    return this.id;
}

getEmail() {
    return this.email;
}

getRole() {
    return "Employee";
}

}

module.exports = Employee;