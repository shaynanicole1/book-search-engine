function renderLicenseBadge(license) {
  if (!license || license === 'None') return '';
  return `![License](https://img.shields.io/badge/License-${license.replace(/ /g, '%20')}-blue.svg)`;
}

function renderLicenseLink(license) {
  if (!license || license === 'None') return '';
  const licenseLinks = {
    'MIT': 'https://opensource.org/licenses/MIT',
    'Apache 2.0': 'https://www.apache.org/licenses/LICENSE-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0.en.html',
    'BSD 3-Clause': 'https://opensource.org/licenses/BSD-3-Clause'
  };
  return licenseLinks[license] || '';
}

function renderLicenseSection(license) {
  if (!license || license === 'None') return '';
  return `## License

This project is licensed under the [${license}](${renderLicenseLink(license)}) license.`;
}

function generateMarkdown(data) {
  return `# ${data.title}

${renderLicenseBadge(data.license)}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [License](#license)
- [Questions](#questions)

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

${renderLicenseSection(data.license)}

## Questions
For questions, contact me at:

- GitHub: [${data.github}](https://github.com/${data.github})
- Email: [${data.email}](mailto:${data.email})
`;
}

export default generateMarkdown;
