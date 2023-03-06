const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./");

import inquirer from 'inquirer';
inquirer
     .prompt ([
        {
            type:'input',
            message:'README Heading' , 
            name:'heading' 
        },
        {
            type:'input',
            message:'in few words describe this project' , 
            name:'Description' 
        }
     ])

     .then((data) => {
        fs.writeFile('README.md' , generateMarkdown(data) , (err) => err ? console.log (err) : 
        )
     }

     )

// function to write README file
function writeToFile(fileName, data) {
}

// function to initialize program
function init() {

}

// function call to initialize program
init();


