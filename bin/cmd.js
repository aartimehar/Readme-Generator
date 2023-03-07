import inquirer from 'inquirer'
import { writeFileSync } from 'fs'
import { join } from 'path'
import generateMarkdown from './markdownGenerator.js'

function writeToFile (fileName, data) {
  writeFileSync(join(process.cwd(), fileName), data)
}
function init () {
  inquirer
    .prompt([
      
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
        message: "What is your GitHub user name?",
        name: "userName"
    },
    {
        type: "input",
        message: "Please give your GitHub profile link.",
        name: "GitHub"
    },
    {
        type: "input",
        message: "What is your email?",
        name: "email"
    },
    {
        type: "input",
        message: "What are the installation instructions?",
        name: "installation"
        // Access to GitHub.com and a code editor such as vscode is necessary. Click the GitHub link provided above to the APP REPO. Click on the green button that says Clone or Download and Choose how you would like to download: using the SSH/HTTPS keys or download the zip file. If using SSH/HTTPS Key: You will copy the link shown and open up either terminal (mac: pre-installed) or gitbash (pc: must be installed). Once the application is open, you will type git clone paste url here. If using Download ZIP: Click on Download Zip. Locate the file and double click it to unzip the file. Locate the unzipped folder and open it.
    }, {
        type: "input",
        message: "Who are the contributers of this project?",
        name: "contribution"
        //  Thank you to thr whole team of bootcampspot for organising the front-end development and UI course. I as a learner appreciate the efforts of bootcamp spot for providing stunning learning materials to excel during this bootcamp.

    }, 
    {
        type: "input",
        message: "Describe the usage information?",
        name: "usage"
        //In order to use this APP, you need terminal (mac: pre-installed) or gitbash (pc: must be installed). You also need to download and install node.js and npm or yarn package manager. Open the cloned REPO in your favorite code editor, and then in terminal, enter the command “ npm i inquirer“ or “yarn add inquirer” to install the dependency inquirer package. Now you are ready to start using the app by entering “node index.js” on your terminal or gitbash.
    }, 
    {
        type: "input",
        message: "What are the test instructions?",
        name: "test"
        // Ensure that your application includes the require dependacies, by typing the commnd in your integrated terminal "npm install inquirer".
    }, {
        type: "input",
        message: "Describe what have you accomplished?",
        name: "accomplished"
        // Created an awesome and generic ReadMe.md file; which can be utilize for future endeavors! I hope you enjoy this repository, and the application's link, given above and below (I love developing new projects). Please feel free to fork and even collaborate with me on this awesome repository!
    }, {
        type: "input",
        message: "Please give screenshot-1 information?",
        name: "screenshot1"
    }, {
        type: "input",
        message: "Please give screenshot-2 information?",
        name: "screenshot2"
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
    }
    ])
    .then(function (data) {
      console.log('Generating Markdown ....')
      writeToFile('README.md', generateMarkdown({ ...data }))
    })
}

init()
