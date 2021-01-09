const inquirer = require('inquirer');

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
            "Contributing",
            "Tests",
            "Questions"
          ],
          default: [
            "Description",
            "Table of Contents",
            "Installation",
            "Usage",
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

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

${data.installation}

${data.usage}

## <a name="license"></a> License

Notice of which license this application is covered by here

${data.contribution}

${data.tests}

${data.questions}`;
}

module.exports = {
  setTitle,
  setDescription,
  setInstallation,
  setUsage,
  setContribution,
  setTests,
  setQuestion,
  selectSections,
  generateMarkdown
};
