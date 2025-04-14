// Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'What is the title of your project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Provide a short description of your project:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'What are the installation instructions?',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What is the usage information?',
  },
  {
    type: 'input',
    name: 'contributing',
    message: 'Who contributed to the project?',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'How do you run tests?',
  },
  {
    type: 'list',
    name: 'license',
    message: 'What license would you like to use?',
    choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3-Clause', 'None'],
  },
  {
    type: 'input',
    name: 'github',
    message: 'What is your GitHub username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  }
];

// Generate README content from user responses
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description}

## Installation
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Contributing
${data.contributing}

## Tests
\`\`\`
${data.tests}
\`\`\`

## License
This project is licensed under the ${data.license} license.

## Questions
For any questions, please contact me at [${data.email}](mailto:${data.email}).  
GitHub: [${data.github}](https://github.com/${data.github})
`;
}

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('✅ README.md created!')
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    writeToFile('README.md', responses);
  });
}

// Function call to initialize app
init();
