// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
    console.log(inquirer)

//const generateFile = require('./src/readme-template');
//fs.writeFile('./readme.md', generateFile, err => {
    //if (err) throw err;
    //console.log('README is complete! Check out readme.md to see the output!')
//});

// TODO: Create an array of questions for user input
const questions = [];
return inquirer.prompt([
    {
        type: 'input',
        name: 'title',
        message: "What is the title of your project? (Required)",
        validate: titleInput => {
            if (titleInput) {
                return true;
            } else {
                console.log('Please enter the title of your project!');
                return false;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: "What is the description of your project? (Required)",
        validate: descriptionInput => {
            if (descriptionInput) {
                return true;
            } else {
                console.log('Please enter the description of your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmInstructions',
        message: 'Would you like to enter Installation Instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'instructions',
        message: 'Provide some installation instructions about your project:',
    }
])

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
