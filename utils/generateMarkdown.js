const inquirer = require('inquirer');

// First Question, determine what sections to add to ReadMe
// function selectSections() {
//   inquirer
//     .prompt([
//       {
//         type: "checkbox",
//         name: "chooseSections",
//         message:
//           "What sections will you need in your ReadMe? (By Default, all sections are selected)",
//         choices: [
//           "Description",
//           "Table of Contents",
//           "Installation",
//           "Usage",
//           "Contributing",
//           "Tests",
//         ],
//         default: [
//           "Description",
//           "Table of Contents",
//           "Installation",
//           "Usage",
//           "Contributing",
//           "Tests",
//         ],
//       },
//     ])
//     .then((response) => {
//       return response.chooseSections;
//     });
// }

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
  generateMarkdown
};
