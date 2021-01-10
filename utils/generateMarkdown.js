const inquirer = require('inquirer');

async function promptAndReturn() {
  // if Description > run description
  const tempData = {};

  tempData.title = await setTitle();

  questions = await selectSections();

  if(questions.indexOf('Table of Contents') >= 0) {
    tempData.contents = '## Table of Contents';
  }
  if(questions.indexOf('Description') >= 0) {
    tempData.description = await setDescription();
  }
  if(questions.indexOf('Installation') >= 0) {
      tempData.installation = await setInstallation();
      if(tempData.contents) {
        tempData.contents = tempData.contents + '\n* [Installation](#installation)';
      }
  }
  if(questions.indexOf('Usage') >= 0) {
      tempData.usage = await setUsage();
      if(tempData.contents) {
        tempData.contents = tempData.contents + '\n* [Usage](#usage)';
      }
  }
  if(questions.indexOf('License') >= 0) {
      tempData.license = await setLicense();
      if(tempData.contents) {
        tempData.contents = tempData.contents + '\n* [License](#license)';
      }
  }
  if(questions.indexOf('Contributing') >= 0) {
      tempData.contribution = await setContribution();
      if(tempData.contents) {
        tempData.contents = tempData.contents + '\n* [Contributing](#contributing)';
      }
  }
  if(questions.indexOf('Tests') >= 0) {
      tempData.tests = await setTests();
      if(tempData.contents) {
        tempData.contents = tempData.contents + '\n* [Tests](#tests)';
      }
  }
  if(questions.indexOf('Questions') >= 0) {
      tempData.questions = await setQuestion();
      if(tempData.contents) {
          tempData.contents = tempData.contents + '\n* [Questions](#questions)';
      }
  }

  return tempData;
}

// Set the title of the application
async function setTitle() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setTitle",
        message: "What is the title of your application?",
      }
    ]).then((response) => {
      console.log("Application Title Set");
      resolve(response.setTitle);
    });
  });
}

async function setDescription() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setDescription",
        message: "Please describe your application."
      }
    ]).then((response) => {
      console.log("Description Set");
      resolve(`## Description
      
${response.setDescription}
      `)
    })
  })
}

async function setInstallation() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setInstallation",
        message: "Please provide installation instructions for your application."
      }
    ]).then((response) => {
      console.log("Installation Section Set");
      resolve(`## <a name="installation"></a> Installation

${response.setInstallation}`)
    })
  })
}

async function setUsage() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setUsage",
        message: "Please provide usage instrucions for your application."
      }
    ]).then((response) => {
      console.log("Usage Section Set.");
      resolve(`## <a name="usage"></a> Usage

${response.setUsage}`)
    })
  })
}

async function setLicense() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "list",
        name: "setLicense",
        message: "What license should your application be covered under?",
        choices: [
          "Boost Software License",
          "IBM Public License Version 1.0",
          "The MIT License"         
        ]
      }
    ]).then((response) => {
      console.log("License Set.");
      switch (response.setLicense) {
        case "Boost Software License": 
          resolve({
            badge: `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
            link: `[${response.setLicense}](https://www.boost.org/LICENSE_1_0.txt)`
          })
        case "IBM Public License Version 1.0":
          resolve({
            badge: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
            link: `[${response.setLicense}](https://opensource.org/licenses/IPL-1.0)`
          })
        case "The MIT License":
          resolve({
            badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
            link: `[${response.setLicense}](https://opensource.org/licenses/MIT)`
          })
        default:
          reject("Error selecting license type");
      }
    })
  })
}

async function setContribution() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setContribution",
        message: "Please provide contribution guidelines for this application."
      }
    ]).then((response) => {
      console.log("Contribution Section Set.");
      resolve(`## <a name="contributing"></a> Contributing

${response.setContribution}`)
    })
  })
}

async function setTests() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setTests",
        message: "Provide any tests needed to verify functionality of your application."
      }
    ]).then((response) => {
      console.log("Tests Section Set.");
      resolve(`## <a name="tests"></a> Tests

${response.setTests}`)
    })
  })
}

async function setQuestion() {
  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "gitHub",
        message: "Provide your EXACT GitHub username (This will be used to create a link to your GitHub profile)."
      },{
        type: "input",
        name: "email",
        message: "Provide email to reach you by."
      }
    ]).then((response) => {
      console.log("Contact Details for Question Section Set.");
      resolve(`## <a name="questions"></a> Questions

Have questions?
* View my GitHub Profile: [https://github.com/${response.gitHub}](https://github.com/${response.gitHub})
* Email me at: [${response.email}](mailto:${response.email})`)
    })
  })
}

// determine what sections to add to ReadMe
async function selectSections() {
  return new Promise(function(resolve, reject) {
    inquirer
      .prompt([
        {
          type: "checkbox",
          name: "chooseSections",
          message:
            "What sections will you need in your ReadMe? (By Default, all sections are selected)",
          choices: [
            "Description",
            "Table of Contents",
            "Installation",
            "Usage",
            "License",
            "Contributing",
            "Tests",
            "Questions"
          ],
          default: [
            "Description",
            "Table of Contents",
            "Installation",
            "Usage",
            "License",
            "Contributing",
            "Tests",
            "Questions"
          ],
        }
      ]).then((response) => {
        console.log("Sections Selected");
        resolve(response.chooseSections);
      });
    });
}

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  // selectSections().then((response) => {
  //   return response;
  // });
  
  return `# ${data.title}

${data.description}

${data.contents}

${data.installation}

${data.usage}

## <a name="license"></a> License

${data.license.link}

${data.contribution}

${data.tests}

${data.questions}`;
}

module.exports = {
  promptAndReturn,
  setTitle,
  setDescription,
  setInstallation,
  setUsage,
  setLicense,
  setContribution,
  setTests,
  setQuestion,
  selectSections,
  generateMarkdown
};
