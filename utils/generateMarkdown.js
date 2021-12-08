// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== "None") {
    return `
    ![LicenseBadge](https://img.shields.io/badge/License-${license}-green.svg)
    `;
  }
  return '';
};
// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

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
  
  *[Installation](#installation)
  *[Usage](#usage)
  *[Contributions](#contributions)
  *[Tests](#tests)


  ## Installation
  // going to need to rename this

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.confirmContribution}

  ## Tests
  ${data.tests}

  ## Questions

  If you ahve any questions regarding the repo please contact //pu email here and see my other work at //put gibhub here
`;
}

module.exports = generateMarkdown;
