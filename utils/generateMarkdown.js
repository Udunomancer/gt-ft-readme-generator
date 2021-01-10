//Requiring inquirer
const inquirer = require('inquirer');

async function promptAndReturn() {
  //Function that calls section specific functions based on user response to sections to include
  //Input: n/a
  //Output: tempData (object of saved user data)

  //Temporary storage of saved user data
  const tempData = {
    listedSections: {}
  };

  //Call function to set Readme/application title
  tempData.title = await setTitle();

  //Call function to have user select sections to include in readme
  questions = await selectSections();

  //If Table of Contents > set it as an included seciton and set initial value
  if(questions.indexOf('Table of Contents') >= 0) {
    tempData.listedSections.tableOfContents = true;
    tempData.contents = '## Table of Contents';
  }

  //If Description > set it as an included section and call function for user to set Description value
  if(questions.indexOf('Description') >= 0) {
    tempData.listedSections.description = true;
    tempData.description = await setDescription();
  }

  //If Installation > set it as an included section and call function for user to set Installation value
  if(questions.indexOf('Installation') >= 0) {
    tempData.listedSections.installation = true;
    tempData.installation = await setInstallation();
    if(tempData.contents) {
      tempData.contents = tempData.contents + '\n* [Installation](#installation)';
    }
  }

  //If Usage > set it as an included section and call function for user to set Usage value
  if(questions.indexOf('Usage') >= 0) {
    tempData.listedSections.usage = true;
    tempData.usage = await setUsage();
    if(tempData.contents) {
      tempData.contents = tempData.contents + '\n* [Usage](#usage)';
    }
  }

  //If License > set it as an included section and call function for user to set License values
  if(questions.indexOf('License') >= 0) {
    tempData.listedSections.license = true;
    tempData.license = await setLicense();
    if(tempData.contents) {
      tempData.contents = tempData.contents + '\n* [License](#license)';
    }
  }

  //If Contributing > set it as an included section and call function for user to set Contributing value
  if(questions.indexOf('Contributing') >= 0) {
    tempData.listedSections.contributing = true;
    tempData.contribution = await setContribution();
    if(tempData.contents) {
      tempData.contents = tempData.contents + '\n* [Contributing](#contributing)';
    }
  }

  //If Tests > set it as an included section and call function for user to set Tests value
  if(questions.indexOf('Tests') >= 0) {
    tempData.listedSections.tests = true;
    tempData.tests = await setTests();
    if(tempData.contents) {
      tempData.contents = tempData.contents + '\n* [Tests](#tests)';
    }
  }

  //If Questions > set it as an included section and call function for user to set Questions values
  if(questions.indexOf('Questions') >= 0) {
    tempData.listedSections.questions = true;
    tempData.questions = await setQuestion();
    if(tempData.contents) {
        tempData.contents = tempData.contents + '\n* [Questions](#questions)';
    }
  }

  //Return user responses as an object
  return tempData;
}

async function setTitle() {
  //Function to set the title of the application based on user input
  //Input: n/a
  //Output: Promise with saved title from user input

  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setTitle",
        message: "What is the title of your application?",
      }
    ]).then((response) => {
      console.log("Application Title Set");
      resolve(response.setTitle);
    });
  });
}

async function setDescription() {
  //Function to set the description section based on user input
  //Input: n/a
  //Output: Promise with saved description from user input

  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setDescription",
        message: "Please describe your application."
      }
    ]).then((response) => {
      console.log("Description Set");
      resolve(response.setDescription)
    })
  })
}

async function setInstallation() {
  //Function to set the installation section based on user input
  //Input: n/a
  //Output: Promise with saved installation value from user input

  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setInstallation",
        message: "Please provide installation instructions for your application."
      }
    ]).then((response) => {
      console.log("Installation Section Set");
      resolve(response.setInstallation);
    })
  })
}

async function setUsage() {
  //Function to set the usage section based on user input
  //Input: n/a
  //Output: Promise with saved usage value from user input

  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setUsage",
        message: "Please provide usage instrucions for your application."
      }
    ]).then((response) => {
      console.log("Usage Section Set.");
      resolve(response.setUsage);
    })
  })
}

async function setLicense() {
  //Function to set the license values based on user input
  //Input: n/a
  //Output: Promise with object of badge and link values

  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "list",
        name: "setLicense",
        message: "What license should your application be covered under?",
        choices: [
          "Boost Software License",
          "IBM Public License Version 1.0",
          "The MIT License"         
        ]
      }
    ]).then((response) => {
      console.log("License Set.");
      switch (response.setLicense) {
        case "Boost Software License": 
          resolve({
            badge: `[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`,
            link: `[${response.setLicense}](https://www.boost.org/LICENSE_1_0.txt)`
          })
        case "IBM Public License Version 1.0":
          resolve({
            badge: `[![License: IPL 1.0](https://img.shields.io/badge/License-IPL%201.0-blue.svg)](https://opensource.org/licenses/IPL-1.0)`,
            link: `[${response.setLicense}](https://opensource.org/licenses/IPL-1.0)`
          })
        case "The MIT License":
          resolve({
            badge: `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
            link: `[${response.setLicense}](https://opensource.org/licenses/MIT)`
          })
        default:
          reject("Error selecting license type");
      }
    })
  })
}

async function setContribution() {
  //Function to set the contribution section based on user input
  //Input: n/a
  //Output: Promise with contribution section value

  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setContribution",
        message: "Please provide contribution guidelines for this application."
      }
    ]).then((response) => {
      console.log("Contribution Section Set.");
      resolve(response.setContribution)
    })
  })
}

async function setTests() {
  //Function to set the tests section based on user input
  //Input: n/a
  //Output: Promise with tests value from user

  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "setTests",
        message: "Provide any tests needed to verify functionality of your application."
      }
    ]).then((response) => {
      console.log("Tests Section Set.");
      resolve(response.setTests)
    })
  })
}

async function setQuestion() {
  //Function to save email and GitHub profile based on user input
  //Input: n/a
  //output: Promise with questions section values

  return new Promise(function(resolve, reject) {
    inquirer.prompt([
      {
        type: "input",
        name: "gitHub",
        message: "Provide your EXACT GitHub username (This will be used to create a link to your GitHub profile)."
      },{
        type: "input",
        name: "email",
        message: "Provide email to reach you by."
      }
    ]).then((response) => {
      console.log("Contact Details for Question Section Set.");
      resolve(`* View my GitHub Profile: [https://github.com/${response.gitHub}](https://github.com/${response.gitHub})`+'\n'+
`* Email me at: [${response.email}](mailto:${response.email})`)
    })
  })
}

async function selectSections() {
  //Function to select which sections to include in the ReadMe based on user input
  //Input: n/a
  //Output: Promise with an array strings that list the sections to include

  return new Promise(function(resolve, reject) {
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
            "License",
            "Contributing",
            "Tests",
            "Questions"
          ],
          default: [
            "Description",
            "Table of Contents",
            "Installation",
            "Usage",
            "License",
            "Contributing",
            "Tests",
            "Questions"
          ],
        }
      ]).then((response) => {
        console.log("Sections Selected");
        resolve(response.chooseSections);
      });
    });
}

function generateMarkdown(data) {
  //Function to generate the text to include in the Readme file
  //Input: Object of saved data from user input
  //Output: String of completed content to include in the Readme

  //Add Title to string
  let content = `# ${data.title}`;

  //Add license badge to string, IF included
  if(data.listedSections.license) {
    content += '\n';
    content += data.license.badge; 
  }

  //Add description to string, IF included
  if(data.listedSections.description) {
    content += '\n\n## Description\n\n';
    content += data.description;
  }

  //Add table of contents to string, IF included
  if(data.listedSections.tableOfContents) {
    content += '\n\n';
    content += data.contents;
  }

  //Add installation to string, IF included
  if(data.listedSections.installation) {
    content += '\n\n## <a name="installation"></a> Installation\n\n';
    content += data.installation;
  }

  //Add usage to string, IF included
  if(data.listedSections.usage) {
    content += '\n\n## <a name="usage"></a> Usage\n\n';
    content += data.usage;
  }

  //Add license to string, IF included
  if(data.listedSections.license) {
    content += '\n\n## <a name="license"></a> License\n\n';
    content += data.license.link;
  }

  //Add contributing section to string, IF included
  if(data.listedSections.contributing) {
    content += '\n\n## <a name="contributing"></a> Contributing\n\n';
    content += data.contribution;
  }

  //Add tests section to string, IF included
  if(data.listedSections.tests) {
    content += '\n\n## <a name="tests"></a> Tests\n\n';
    content += data.tests;
  }

  //Add questions section to string, IF included
  if(data.listedSections.questions) {
    content += '\n\n## <a name="questions"></a> Questions\n\nHave questions?\n';
    content += data.questions;
  }

  //Return the completed string
  return content;
}

module.exports = {
  promptAndReturn,
  generateMarkdown
};
