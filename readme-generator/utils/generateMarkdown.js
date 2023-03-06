// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.description}

  ## Table of Contents
  * [Description](#description)
  * [Table of Contents](#table-of-contents)
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
    
    
  ## Installation
  ${data.installation}
    
  ## Usage
  ${data.usage}
    
  ## License
  Copyright &copy; 2023 ${data.name}       
  This project is [${data.license[0]}](${data.license[2]}) licensed
    
  ## Contributing
  ${data.contributing}
    
  ## Tests
  ${data.test}
    

`;
}

module.exports = generateMarkdown;
