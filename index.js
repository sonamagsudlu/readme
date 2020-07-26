//Loading required Modules
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");
const fs = require("fs");
const path = require("path");

// array of questions for user
const questions = [
  {
    type: "input",
    name: "github",
    message: "What is your GitHub username?",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address?",
  },
  {
    type: "input",
    name: "title",
    message: "What is your project's name?",
  },
  {
    type: "input",
    name: "description",
    message: "Please write a short description of your project",
  },
  {
    type: "list",
    name: "license",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "NONE"],
  },
  {
    type: "input",
    name: "installation",
    message: "What command should be run to install the dependencies?"
  },
  {
    type: "input",
    name: "test", 
    message: " What command should be run to run the test?"
  },
  {
    type: "input",
    name: "usage",
    message: "What does the user need to know about the usage of repo?"
    
  },
  {
    type: "input", 
    name: "contributing",
    message: " What does the user need to know about contributing to the repo?"
  }
  //rest of the questions here....
];

// function to write README file
function writeToFile(fileName, data) {
  return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

// function to initialize program
function init() {
  inquirer.prompt(questions).then((inquirerResponses) => {
    console.log("generating readme");
    writeToFile("Readme.md", generateMarkdown({ ...inquirerResponses }));
  });
}

// function call to initialize program
init();
