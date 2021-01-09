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

    //set the title
    data.title = await generator.setTitle();
    questions = await generator.selectSections();
    console.log(questions);
    if(questions.indexOf('Description') >= 0) {
        data.description = await generator.setDescription();
    }
    if(questions.indexOf('Table of Contents') >= 0) {
        console.log('Table of Contents');
    }
    if(questions.indexOf('Installation') >= 0) {
        data.installation = await generator.setInstallation();
    }
    if(questions.indexOf('Usage') >= 0) {
        data.usage = await generator.setUsage();
    }
    if(questions.indexOf('Contributing') >= 0) {
        data.contribution = await generator.setContribution();
    }
    if(questions.indexOf('Tests') >= 0) {
        data.tests = await generator.setTests();
    }
    if(questions.indexOf('Questions') >= 0) {
        data.questions = await generator.setQuestion();
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