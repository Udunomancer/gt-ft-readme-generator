// TODO: Include packages needed for this application
const fs = require('fs');
const generator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
let questions;
let data = {}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README file successfully created.');
    })
}

// TODO: Create a function to initialize app
async function init() {

    data = await generator.promptAndReturn();
    //set the title
    // data.title = await generator.setTitle();
    // questions = await generator.selectSections();
    // console.log(questions);
    // if(questions.indexOf('Table of Contents') >= 0) {
    //     data.contents = '## Table of Contents';
    // }
    // if(questions.indexOf('Description') >= 0) {
    //     data.description = await generator.setDescription();
    // }
    // if(questions.indexOf('Installation') >= 0) {
    //     data.installation = await generator.setInstallation();
    //     if(data.contents) {
    //         data.contents = data.contents + '\n* [Installation](#installation)';
    //     }
    // }
    // if(questions.indexOf('Usage') >= 0) {
    //     data.usage = await generator.setUsage();
    //     if(data.contents) {
    //         data.contents = data.contents + '\n* [Usage](#usage)';
    //     }
    // }
    // if(questions.indexOf('License') >= 0) {
    //     data.license = await generator.setLicense();
    //     if(data.contents) {
    //         data.contents = data.contents + '\n* [License](#license)';
    //     }
    // }
    // if(questions.indexOf('Contributing') >= 0) {
    //     data.contribution = await generator.setContribution();
    //     if(data.contents) {
    //         data.contents = data.contents + '\n* [Contributing](#contributing)';
    //     }
    // }
    // if(questions.indexOf('Tests') >= 0) {
    //     data.tests = await generator.setTests();
    //     if(data.contents) {
    //         data.contents = data.contents + '\n* [Tests](#tests)';
    //     }
    // }
    // if(questions.indexOf('Questions') >= 0) {
    //     data.questions = await generator.setQuestion();
    //     if(data.contents) {
    //         data.contents = data.contents + '\n* [Questions](#questions)';
    //     }
    // }
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