// TODO: Include packages needed for this application
const fs = require('fs');
const generator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [];
const fileName = 'test.txt';

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README file successfully created.');
    })
}

// TODO: Create a function to initialize app
function init() {
    generator.generateMarkdown();
}

// Function call to initialize app
const initiate = new Promise((resolve, reject) => {
    init();
    resolve('Success');
});
initiate.then((response) => {
    writeToFile('test.txt', response);
})