function generateMarkdown(data) {
    return `# ${data.title}
    ##### ${data.logo}
    [${data.userName}](${data.GitHub}) [Email Me](${data.email}) 
    
    ## User Story
    ### As a developer, I want a README generator so that I can quickly create a professional README for a new project.

    ## Table of Contents
    * [Repository Description](#Repository-Description)
    * [Installation Instructions](#Install)
    * [Contribution] (#Contribution)
    * [Usage Information](#Usage)
    * [Test Instructions](#Test Instructions)
    * [Overview: What We Accomplished!] (#Accomplished!)
    * [Demo I createad] (###Screenshot - 1)
    * [Demo I createad] (###Screenshot - 2)
    * [License] (#Licence)

    <a name="Repository-Description"></a>
## 1. Repository Description
  - When a user enters the project title then it is displayed as the title of the README
  - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
  - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
  - When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README
  
    <a name="Install"></a>
## 2.Installation Instructions
    ${data.installation}

  <a name="Contribution"></a>
## 3.Contribution
    
    ${data.contribution}
    #The following links have helped me with this project.
    * [https://www.npmjs.com/package/inquirer] (##npm inquirer)
    * [https://choosealicense.com/] (##Licence)
    * [https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url] (##How to validate a URL?)

  <a name="Usage"></a>
## 5.Usage
    ${data.usage}

  <a name>="Test Instructions"></a>
## 6.Test Instructions
    ${data.test}

  <a name="Accomplished"></a>
## 7.Overview: What We Accomplished!
    ${data.accomplished}

# Screenshots (Building this application)
<a name="Screenshot - 1"></a>
## Screenshot - 1
    ${data.screenshot1}

<a name="Screenshot - 2"></a>
## Screenshot - 2
    ${data.screenshot2}

<a name="Licence"></a>
# License
    ${data.license}`;
  }
export default generateMarkdown;
  