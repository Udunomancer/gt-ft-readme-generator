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
          ],
          default: [
            "Description",
            "Table of Contents",
            "Installation",
            "Usage",
            "Contributing",
            "Tests",
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

## Description

License badge here
Description text here

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)

## <a name="installation"></a> Installation

Installation Instructions Here

## <a name="usage"></a> Usage

Usage Information Here

## <a name="license"></a> License

Notice of which license this application is covered by here

## <a name="contributing"></a> Contributing

Contribution guidelines here

## <a name="tests"></a> Tests

Test Instructions here

## <a name="questions"></a> Questions

Link to GitHub Profile based on GitHub UserName here

Instructions on contact with provided email here`;
}

module.exports = {
  setTitle,
  selectSections,
  generateMarkdown
};
