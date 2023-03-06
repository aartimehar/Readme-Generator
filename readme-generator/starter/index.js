const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
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
    return fs.writeFile(path.join(process.cwd(),fileName),data, (err) =>
    err ? console.log(err) : console.log('Readme successfully generated!')
    )
}

// function to initialize program
function init() {
    inquirer
    .prompt(questions)
    .then((data) => {
      const filename = `${data.fileName}.md`;

      writeToFile(filename, generateMarkdown(data))
    });
}

// function call to initialize program
init();
