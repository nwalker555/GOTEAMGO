const inquirer = require("inquirer");
const fs = require('fs');

const Employee = require('./lib/Employee');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');

const teammates = []

function teamInfo() {
    inquirer.prompt([
        {
            type: "input",
            message: "Employee Name?",
            name: "fullname",
        },
        {
            type: "input",
            message: "Employee Email?",
            name: "email"
        },
        {
            type: "type",
            message: "Employee ID Number?",
            name: "id"
        },
        {
            type: "list",
            message: "Select Employee Role",
            name: "role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
        },
    ]).then(({ fullname, id, email, role }) => {
        if (role === "Manager") {
            let manager = "";
            return inquirer
                .prompt([{
                    type: 'text',
                    name: 'office',
                    message: " What is the Office Number?"
                }])
                .then(({ office }) => {
                    manager.push(new Manager(fullname, id, email, office))
                    teammates.push(manager);
                    cardhtml(teammates)
                    html();
                })
        } else if (role === "Engineer") {
            let engineer = "";
            return inquirer
                .prompt([{
                    type: 'text',
                    name: 'github',
                    message: " What is your Github?"
                }])
                .then(({ github }) => {
                    engineer.push(new Engineer(fullname, id, email, github))
                    teammates.push(engineer);
                    cardhtml(teammates)
                    html();
                })
        } else {
            let intern = "";
            return inquirer
                .prompt([{
                    type: 'text',
                    name: 'school',
                    message: " What school do you attend?"
                }])
                .then(({ school }) => {
                    intern.push(new Intern(fullname, id, email, school))
                    teammates.push(intern);
                    cardhtml(teammates)
                    html();
                })
        }
    })
}

function cardhtml() {
    if (role === "Manager") {
        return new Promise(function (resolve, reject) {
            const name = teammates.getName();
            const role = teammates.getRole();
            const id = teammates.getId();
            const email = teammates.getEmail();
            const number = teammates.getOfficeNumber();
            let html = `<div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-primary">
                <h5 class="card-title">${role}</h5>
                <ul>
                    <li>ID:${id}</li>
                    <li>Email: ${email}</li>
                    <li>Office Number:${number}</li>
                </ul>
            </div>
        </div>`
        console.log("teammate added");
        fs.appendFile("./dist/MyTeam.html", html, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
        })
    } else if (role === "Engineer") {
        return new Promise(function (resolve, reject) {
            const name = teammates.getName();
            const role = teammates.getRole();
            const id = teammates.getId();
            const email = teammates.getEmail();
            const github = teammates.getGithub();
            let html = `<div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-primary">
                <h5 class="card-title">${role}</h5>
                <ul>
                    <li>ID:${id}</li>
                    <li>Email: ${email}</li>
                    <li>GitHub:<a href="https://github.com/${github}">${github}</a></li>
                </ul>
            </div>
        </div>`
        console.log("teammate added");
        fs.appendFile("./dist/MyTeam.html", html, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
        })
    } else {
        return new Promise(function (resolve, reject) {
            const name = teammates.getName();
            const role = teammates.getRole();
            const id = teammates.getId();
            const email = teammates.getEmail();
            const school = teammates.getSchool();
            let html = `<div class="card border-primary mb-3" style="max-width: 18rem;">
            <div class="card-header">${name}</div>
            <div class="card-body text-primary">
                <h5 class="card-title">${role}</h5>
                <ul>
                    <li>ID:${id}</li>
                    <li>Email: ${email}</li>
                    <li>School:${school}</li>
                </ul>
            </div>
        </div>`
        console.log("teammate added");
        fs.appendFile("./dist/MyTeam.html", html, function (err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        });
        })
    }
};

function html() {
    if (role === "Manager") {
        let html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="./MyTeam.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
          </div>
        </div>
        ${cardhtml()}
    </body>
    
    </html>`
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("good to go");
    }
    let html = `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <!-- CSS only -->
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css" rel="stylesheet"
            integrity="sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x" crossorigin="anonymous">
        <link rel="stylesheet" href="./MyTeam.css">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>My Team</title>
    </head>
    
    <body>
        <div class="jumbotron jumbotron-fluid">
            <div class="container">
              <h1 class="display-4">My Team</h1>
            </div>
          </div>
        </div>
        
    </body>
    
    </html>`
    fs.writeFile("./output/team.html", html, function(err) {
        if (err) {
            console.log(err);
        }
    });
    console.log("good to go");
};

teamInfo();