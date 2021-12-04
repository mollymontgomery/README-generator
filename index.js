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
//const questions = [];
const promptUser = () => {
return inquirer.prompt([
    {
        type: 'input',
        name: 'github',
        message: 'Enter your GitHub Username (Required)',
        validate: githubInput => {
          if (githubInput) {
            return true;
          } else {
            console.log('Please enter your GitHub username!');
            return false;
          }
        }
      },
    ]);
  };
  
const promptProject = readmeData => {
    console.log(`
================
Add a New README
================
    `)

    if (!readmeData.readme) {
        readmeData.readme = [];
    }
    return inguirer
        .prompt ([ 
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
    },
    {
        type: 'input',
        name: 'usage',
        message: "Please enter Usage information: (Required)",
        validate: usageInput => {
            if (usageInput) {
                return true;
            } else {
                console.log('Please enter the usage information of your project!');
                return false;
            }
        }
    },
    {
        type: 'confirm',
        name: 'confirmContribution',
        message: 'Would you like to enter Contribution Guidelines?',
        default: true
    },
    {
        type: 'input',
        name: 'contribution',
        message: 'Provide some contribution guidelines to your project:',
    },
    {
        type: 'confirm',
        name: 'confirmTests',
        message: 'Would you like to enter Test Instructions?',
        default: true
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide some test instructions to your project:',
    },
    {
        type: 'checkbox',
        name: 'license',
        message: 'Please choose your license from this list of options:',
        choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD3', 'None']
    }
])
.then(projectData => {
    readmeData.projects.push(readmeData);
    if (readmeData.confirmAddReadme) {
        return promptProject(readmeData);
    } else {
        return readmeData;
    }
});
};

promptUser()
.then(promptProject)
//.then(answers => console.log(answers))
.then(projectAnswers => console.log(projectAnswers));

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
