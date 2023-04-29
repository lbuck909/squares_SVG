const fs = require('inquirer');
const inquirer = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

//end user questions to create logo
function userPrompt() {
  .prompt([
    {
      type: 'list',
      name:'What shape would you like for your logo?',
      choices: [ 'Triangle', 'Square', 'Circle'],
      response: 'shape',
      
    },

    {
      type: 'input',
      name:'What text would you like for the logo? (Enter up to three charaters)',
      response: 'text',
      
    },

    {
      type: 'input',
      name: 'What color would you like the text? (Enter color keyword or hexadecimal number)',
      response: ' characterColor',
      
    },

    {
      type: 'input',
      name: 'What color would you like the chosen shape? (Enter color keyword or hexadecimal number)',
      response: ' shapeColor',
      
    },
  ])
  .then((answers) => {
    if (ans)
  }
}

