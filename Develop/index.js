// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        message: 'Please enter Project title: ',
        name: 'title',
        validate: (value) => { if (value) { return true } else { return 'Plesae enter a value!' } }
    },
    {
        type: 'input',
        message: 'Please enter description of your project: ',
        name: 'description',
        validate: (value) => { if (value) { return true } else { return 'Plesae enter a value!' } }
    },
    {
        type: 'input',
        message: 'Please enter intstallation instructions: ',
        name: 'installation',
        validate: (value) => { if (value) { return true } else { return 'Plesae enter a value!' } }
    },
    {
        type: 'input',
        message: 'Please enter usage information: ',
        name: 'usage',
        validate: (value) => { if (value) { return true } else { return 'Plesae enter a value!' } }
    },
    {
        type: 'input',
        message: 'Please enter contribution guidelines: ',
        name: 'contribution',
        validate: (value) => { if (value) { return true } else { return 'Plesae enter a value!' } }
    },
    {
        type: 'input',
        message: 'Please enter test instructions: ',
        name: 'test',
        validate: (value) => { if (value) { return true } else { return 'Plesae enter a value!' } }
    },
    {
        type: 'list',
        message: 'Please chose your license: ',
        choices: ['MIT', 'GPL', 'APACHE', 'N/A'],
        name: 'license',
        validate: (value) => { if (value) { return true } else { return 'Plesae enter a value!' } }
    },
    {
        type: 'input',
        message: 'Please enter your github username: ',
        name: 'github',
        validate: (value) => { if (value) { return true } else { return 'Plesae enter a value!' } }
    },
    {
        type: 'input',
        message: 'Please enter your email: ',
        name: 'email',
        validate: (value) => { if (value) { return true } else { return 'Plesae enter a value!' } }
    }

];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(`${fileName.toLowerCase().split(' ').join('')}.md`, data, (err, message) => {
        console.log('Readme generated')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
        .then(({
            title,
            description,
            installation,
            usage,
            contribution,
            test,
            license,
            github,
            email
        }) => {
            const generate = `
![shields.io](https://img.shields.io/badge/License-${license}-green)
# ${title}

## Description
${description}

## Table of contents
-[Installation](#installation)<br/>
-[Usage](#usage)<br/>
-[Contributors](#contribution)<br/>
-[License](#license)<br/>

## Installation
${installation}

## Usage
${usage}<br/>
The video below walksthrough the app.</br>
https://watch.screencastify.com/v/Fuk5NiAi0z3CO3f7vCRo

## Contributors
${contribution}

## Test
${test}

## License
${license}

## Contact
### Github: https://github.com/${github}
### Email: ${email}
`
            writeToFile(title, generate)
        })
}

// Function call to initialize app
init();
