// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "None") {
    return `
    ![LicenseBadge](https://img.shields.io/badge/License-${License}-green)
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

function generateMarkdown(data) {
  const { license, description, ...readmeData } = data;

  return `# ${data.title}

  ## Description
  ${data.description}

  ## License
  ${license}

  ## Table of Contents
  
  [Installation](#installation)
  [Usage](#usage)
  [Contributions](#contributions)
  [Tests](#tests)


  ## Installation
  ${data.install}

  ## Usage
  ${data.usage}

  ## Contributions
  ${data.contribution}

  ## Tests
  ${data.tests}

`;
}

module.exports = generateMarkdown;
