// Requires fs and utils/generateMarkdown.js
const fs = require('fs');
const generator = require('./utils/generateMarkdown');

// Questions variable to store what sections to include
let questions;
// Data variable to store responses
let data = {}

function writeToFile(fileName, data) {
//Function to write the generated README file
//Input: fileName (string, [name].[file type] to write to)
//Input: data (object of user responses)
//Output: n/a

    fs.writeFile(fileName, data, (err) => {
        err ? console.error(err) : console.log('======\nREADME file successfully created.\n======');
    })
}

async function init() {
//Function to run on start.  Prompts user and saves response, then writes formatted Readme based on response data
//Input: n/a
//Output: n/a

    //Prompt user to input data for ReadMe and save it
    data = await generator.promptAndReturn();
    
    //Take the input and write it to the readme file
    writeToFile('GENERATED.md', generator.generateMarkdown(data));
}

// Calling init() to start functionality
init();