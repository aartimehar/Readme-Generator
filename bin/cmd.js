const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const README_FILENAME = 'README.md'
const generateMarkdown = require('generateMarkdown');


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
            name:'description' 
        },
        {
            type:'input',
            message:'in few words describe this project' , 
            name:'requirements' 
        }
     ])

     .then((data) => {
        fs.writeFile(path.resolve(__dirname, README_FILENAME) , generateMarkdown(data) , (err) => err 
        ? console.log (err) 
        : console.log(`Your ${README_FILENAME}has been generated.`)
        )
     })






