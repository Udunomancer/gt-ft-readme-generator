const inquirer = require('inquirer');

// First Question, determine what sections to add to ReadMe
function selectSections() {
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
      },
    ])
    .then((response) => {
      console.log(response);
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
function generateMarkdown() {
// function generateMarkdown(data) {
  selectSections();
  return 'success';
//   return `# ${data.title}

// `;
}

module.exports = {
  generateMarkdown
};
