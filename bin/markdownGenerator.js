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
    * [Overview: What We Accomplished!] (#Overview: What We Accomplished!)
    * [Screenshots (Building this application)] (###Screenshots (Building this application))
    * [Demo I createad] (###Screenshot - 1)
    * [Demo I createad] (###Screenshot - 2)
    * [Demo I createad] (###Screenshot - 3)
    * [References] (#References)
    * [License] (#Licence)

## Repository Description
  - When a user enters the project title then it is displayed as the title of the README
  - When a user enters a description, installation instructions, usage information, contribution guidelines, and test instructions then this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
  - When a user chooses a license for their application from a list of options then a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
  - When a user enters their GitHub username then this is added to the section of the README entitled Questions, with a link to their GitHub profile
  - When a user enters their email address then this is added to the section of the README entitled Questions, with instructions on how to reach them with additional questions
  - When a user clicks on the links in the Table of Contents then they are taken to the corresponding section of the README
    
    ## Installation Instructions
    ${data.installation}

    ## Contribution
    
    ${data.contribution}
    #The following links have helped me with this project.
    * [https://www.npmjs.com/package/inquirer] (##npm inquirer)
    * [https://choosealicense.com/] (##Licence)
    * [https://stackoverflow.com/questions/161738/what-is-the-best-regular-expression-to-check-if-a-string-is-a-valid-url] (##How to validate a URL?)

    ## Usage Information
    ${data.usage}

    ## Test Instructions
    ${data.test}

    ## Overview: What We Accomplished!
    ${data.accomplished}

    # Screenshots (Building this application)
    ## Screenshot - 1
    ${data.screenshot1}

    ## Screenshot - 2
    ${data.screenshot2}

    # License
    ${data.license}`;
  }
export default generateMarkdown;
  