const fs = require('inquirer');
const inquirer = require('fs');
const { Triangle, Circle, Square } = require('./lib/shapes');

//end user questions to create logo
function userPrompt() {
  prompt([
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
      response: 'characterColor',
      
    },

    {
      type: 'input',
      name: 'What color would you like the chosen shape? (Enter color keyword or hexadecimal number)',
      response: 'shapeColor',
      
    },
  ])
  .then((answer) => {
    if (answer.text.length > 3) {
      userPrompt();
    }else {
      writeShapeFile('fileName.svg', answer);
    }

  });
}
//create func. use string, add ht and wd, place user text ontop, shape choice and create svg file
function writeToFile(fileName, answer) {
let svgString = "";
//json needed here
svgString += `${answer.shape}`;
//pull size of shape from w3.org
svgString = '<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg">';
//g tag needed to apply transformations to the child element
svgString += "<g>";

//user input, polygon properties and color of the desired shape
let userShape;
  if (answer.shape === 'Square') {
    userShape = new Square();
    svgString += `rect x="70" y="70" width="150" height="150" fill="${answer.shapeColor}"/>`;
  } else if (answer.shape === 'Circle'){
    userShape = new Circle();
    svgString += `<circle cx="150" cy="150" r="90"  fill="${answer.shapeColor}"/>`;
  } else{
    userShape = new Triangle();
    svgString += `<polygon points="0,200 300,200 150,0 fill="${answer.shapecolor}"/>;`
  }


//text color and alignment. Use default font size of 30 (needs to be readable)
svgString += `<text x="150" y="100" text-anchor="middle" font-size"30" fill="${answer.characterColor}">${answer.text}</text>`;
svgString += "</g>";
svgString += "</svg>";
}
fs.writeToFile('fileName.svg', svgString, (err) => {
  err? console.log(err) : console.log("generated logo.svg");
});
 
userPrompt();