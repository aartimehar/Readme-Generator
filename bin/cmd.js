const inquirer = require('inquirer');
const fs = require('fs');
const path = require('path');
const generateMarkdown = require('generateMarkdown');

function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data);
}
function init () {
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
    ]).then(function(data) {
        console.log("Generating Markdown ....")
        writeToFile("README.md" , generateMarkdown({ ...data
        }));
    } )
}

init();




     







