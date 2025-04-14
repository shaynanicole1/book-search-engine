import inquirer from 'inquirer';
import fs from 'fs';
import generateMarkdown from './generateMarkdown.js';

// Array of questions for user input
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

// Function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, generateMarkdown(data), (err) =>
    err ? console.error(err) : console.log('✅ README.md created successfully!')
  );
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then((responses) => {
    writeToFile('README.md', responses);
  });
}

// Start the app
init();
