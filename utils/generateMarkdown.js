// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license){
    case 'MIT':
      return `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
    
    case 'APACHE 2.0':
      return `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;

  //...and so on for other possible values of license.
  
    default:
      return ''
  }
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
// function renderLicenseLink(license) {
//   if (license !== "None") {
//     return `
//     (https://img.shields.io/badge/License-${license}-green.svg)
//     `;
//     return '';
//   }
// }

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
//const fs = require('fs');

// follow same format for renderlicenselink as render license badge
// change contributions and usage to inputs not true/false

function generateMarkdown(data) {
  console.log("DATA IN GENERATEMARKDOWN", data)

  return `# ${data.title}

  ## Description
  ${data.description}

  ## License
${renderLicenseBadge(data.license)}

  ## Table of Contents
  
  *[Installation](#installation)<br>
  *[Usage](#usage)<br>
  *[Contributions](#contributions)<br>
  *[Tests](#tests)<br>
  *[Questions] (#questions)


  ## Installation
  ${data.instructions}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.tests}

  ## Questions

  If you have any questions regarding the repo please contact ${data.email} and see my other work on my github at ${data.github} 
`;
}

module.exports = generateMarkdown;
