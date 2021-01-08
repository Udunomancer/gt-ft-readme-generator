// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [];

inquirer.prompt([
    {
        type: 'checkbox',
        name: 'chooseSections',
        message: 'What sections will you need in your ReadMe? (By Default, all sections are selected)',
        choices: ['Description', 'Table of Contents', 'Installation', 'Usage', 'Contributing', 'Tests'],
        default: ['Description', 'Table of Contents', 'Installation', 'Usage', 'Contributing', 'Tests']
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
//init();
