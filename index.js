// TODO: Include packages needed for this application
const fs = require('fs');
const generator = require('./utils/generateMarkdown');

// TODO: Create an array of questions for user input
let questions;
const data = {
    title: 'New ReadMe MarkDown',
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('README file successfully created.');
    })
}

// TODO: Create a function to initialize app
async function init() {

    questions = await generator.selectSections();
    
    // const sections = new Promise(function(resolve, reject) {
    //     generator.selectSections();
    //     if (questions) {
    //         resolve("ReadMe Sections Selected");
    //     } else {
    //         reject(Error("Error selecting ReadMe sections"))
    //     }
    // });
    // sections.then(function(result) {
    //     console.log(result);
    //     console.log(questions);
    // }, function(err) {
    //     console.log(err);
    // });
    //writeToFile('text.txt', generator.generateMarkdown(data));
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