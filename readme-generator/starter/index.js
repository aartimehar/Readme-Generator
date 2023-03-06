const inquirer = require("inquirer");
const fs = require("fs");
const path = require('path');
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
     {
        type: "input",
        message: "What is the title of your repository?",
        name: "title"
    },
    {
        type: "input",
        message: "Please give your logo information.",
        name: "logo"
    },
    {
        type: "input",
        message: "What is your description of repositary?",
        name: "description"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "list",
        name: "license",
        message: "Please select which license you would like to use.",
        choices : [
            "APACHE 2.O",
            "BSD 3",
            "GVL-GPL 3.0",
            "MIT",
            "None"
        ],
    },
    {
        type: "input",
        message: "Please state if others can contribute.",
        name: "contribute"
    },
    {
        type: "input",
        message: "Please state any test(s) require (1/3).",
        name: "test"
    },
    {
        type: "input",
        message: "Please state any test(s) require(2/3).",
        name: "test2"
    },
    {
        type: "input",
        message: "Please state any test(s) require (3/3).",
        name: "test3",
    },
    {
        type: "input",
        message: "Installation",
        name: "test3",
    },
    {
        type: "input",
        message: "Please state any test(s) require (3/3).",
        name: "test3",
    }
];

// function to write README file
function writeToFile(fileName, data) {

    fs.writeFile(fileName , data , function(err) {
        console.log(fileName);
        console.log(data)
        if (err) {
            return console.log(err);
        } else {
            console.log(success);
        }
    })
}

// function to initialize program
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        writeToFile("README.md" , generateMarkdown(data));
        console.log(data)
    })
}

// function call to initialize program
init();
