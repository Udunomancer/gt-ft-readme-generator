// TODO: Include packages needed for this application
const fs = require('fs');
const generator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
let questions;
const data = {}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README file successfully created.');
    })
}

// TODO: Create a function to initialize app
async function init() {
    data.title = await generator.setTitle();
    questions = await generator.selectSections();
    console.log(questions);
    if(questions.indexOf('Description') >= 0) {
        console.log('Add Description');
    }
    if(questions.indexOf('Table of Contents') >= 0) {
        console.log('Add Table of Contents');
    }
    if(questions.indexOf('Installation') >= 0) {
        console.log('Add Installation');
    }
    if(questions.indexOf('Usage') >= 0) {
        console.log('Usage');
    }
    if(questions.indexOf('Contributing') >= 0) {
        console.log('Contributing');
    }
    if(questions.indexOf('Tests') >= 0) {
        console.log('Tests');
    }
    writeToFile('text.txt', generator.generateMarkdown(data));
}



// Function call to initialize app
init();

// const initiate = new Promise((resolve, reject) => {
//     readMe = init();
//     resolve('Success');
// });

// initiate.then((response) => {
//     writeToFile('test.txt', readMe);
// })