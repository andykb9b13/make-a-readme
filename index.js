const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: 'text',
            message: 'What is your GitHub username?',
            name: 'github'
        },
        {
            type: 'text',
            message: 'What is your email address?',
            name: 'email'
        },
        {
            type: 'text',
            message: "what is your project's name",
            name: 'projectName'
        },
        {
            type: 'text',
            message: 'Please provide a short description of you project',
            name: 'description'
        },
        {
            type: 'list',
            message: 'Please select a license:',
            name: 'license',
            choices: ['MIT License', 'Apache License 2.0', 'Artistic License 2.0', 'Creative Commons Zero v1.0 Universal', 'Educational Community License v2.0', 'Eclipse Public License 2.0', 'GNU General Public License v2.0', 'ISC', 'Microsoft Public License', 'Mozilla Public License 2.0', 'Open Software License 3.0', 'PostgreSQL License', 'The Unlicense', 'zLib License']
        },
        {
            type: 'text',
            message: 'What command should be run to install dependencies?',
            name: 'dependencies'
        },
        {
            type: 'text',
            message: 'What command should be run to test?',
            name: 'test'
        },
        {
            type: 'text',
            message: 'What does the user need to know about reporting errors?',
            name: 'errors'
        },
        {
            type: 'text',
            message: 'What does the user need to know about contributing to the repo?',
            name: 'contributing'
        }
    ])
    .then((answers) => {
        fs.writeFile('README.md',
            `# ${answers.projectName}

## Description
${answers.description}
            
## License
${answers.license}
            
## Installing Dependencies
            
The following command should be used to install dependencies: ${answers.dependencies}
            
## Test
            
The following command should be used to run a test: ${answers.test}
            
## Reporting Errors
            
${answers.errors}
            
## Contributing
            
${answers.contributing}`,
            (err) => (err) ? console.log("Something went wrong") : console.log("Success"))
    })

