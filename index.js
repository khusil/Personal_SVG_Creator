const inquirer = require('inquirer');
const fs = require('fs');
const SVG = require('./lib/svg');

const questions = [
    {
        name:'characters',
        type: 'input',
        message:'please enter a minimum of 3 characters',

    },
    {
        name : 'charColor',
        type: 'input',
        message:'please enter a color or key',
    },
    {
        name: 'shape',
        tpye: 'list',
        choices: ['square', 'circle', 'triangle',]
    },
    {
        name: 'shapeColor',
        type: 'input',
        message:'please enter a color or key',
    }
]


async function init() {
    const input = await inquirer.prompt(questions);
    const SVG = SVG(input)
    fs.writeFile(logo.svg, SVG, err => err ? console.error(err) : console.log('logo generated'))
}

init();