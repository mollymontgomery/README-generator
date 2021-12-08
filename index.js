// TODO: Include packages needed for this application
const fs = require('fs')
const inquirer = require('inquirer');
const path = require("path")
const generateMarkDown = require("./utils/generateMarkdown")


    return inquirer
        .prompt([
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
                when: ({ confirmInstructions }) => {
                    if (confirmInstructions) {
                        return true;
                    } else {
                        return false;
                    }
                }
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
            },
            {
                type: 'input',
                name: 'contribution',
                message: 'Provide some contribution guidelines to your project:',
                when: ({ confirmContribution }) => {
                    if (confirmContribution) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'confirm',
                name: 'confirmTests',
                message: 'Would you like to enter Test Instructions?',
                default: false
            },
            {
                type: 'input',
                name: 'tests',
                message: 'Provide some test instructions to your project:',
                when: ({ confirmTests }) => {
                    if (confirmTests) {
                        return true;
                    } else {
                        return false;
                    }
                }
            },
            {
                type: 'list',
                name: 'license',
                message: 'Please choose your license from this list of options:',
                choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD3', 'None']
            },
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
            {
                type: 'input',
                name: 'email',
                message: 'Enter your email (Required)',
                validate: emailInput => {
                    if (emailInput) {
                        return true;
                    } else {
                        console.log('Please enter your email!');
                        return false;
                    }
                }
            },
        ])
        .then(projectData => {
            writeToFile("ReadMe.md", generateMarkDown({ ...projectData }))
            console.log('README is complete! Check out ReadMe.md to see the output!')
        });



// TODO: Create a function to write README file
function writeToFile(fileName, data) {

    return fs.writeFileSync(path.join(process.cwd(), fileName), data)
    console.log('README is complete! Check out readme.md to see the output!')
};

