const inquirer = require('inquirer');
const fs = require("fs");
const path = require("path");
const generateHTML = require("./src/template")
const Manager = require("./lib/Manager")

const questions = [
    {
      type: 'input',
      name: 'name',
      message: 'What is the team managers name?',
      validate: name => {
        if (name) {
           return true;
      } else {
        console.log('Please enter the name!');
        return false;
        }
      }   
    },

    {
        type: 'input',
        name: 'id',
        message: 'What is the team managers id?',
        validate: id => {
          if (id) {
             return true;
        } else {
          console.log('Please enter the id!');
          return false;
          }
        }   
      },

      {
        type: 'input',
        name: 'email',
        message: 'What is the team managers email address?',
        validate: email => {
          if (email) {
             return true;
        } else {
          console.log('Please enter the email!');
          return false;
          }
        }   
      },

      {
        type: 'input',
        name: 'officeNumber',
        message: 'What is the team managers office number?',
        validate: officeNumber => {
          if (officeNumber) {
             return true;
        } else {
          console.log('Please enter the office number!');
          return false;
          }
        }   
      },

]

function init() {
    inquirer.prompt(questions).then(({name, id, email, officeNumber}) =>  {
    let addManager = new Manager (name, id, email, officeNumber)
    console.log("Here", addManager)
    fs.writeFileSync('./dist/generateHTML.html', generateHTML(addManager)) 
   })
  }

  init ();