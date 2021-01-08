// TODO: Include packages needed for this application

const fs = require('fs');
const generator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
const data = {
    title: 'Test'
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    generator.generateMarkdown();
}

// Function call to initialize app
init();
