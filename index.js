const inquirer = require('inquirer');
const fs = require('fs');

const question = require('./promt/promt');
const shape = require('./promt/shape');

prompt.question.then(shape);

function charslenght(response) {
    if (!response){
        return 'please enter a response';
    }
    if (response.lenght < 3){
        return 'please enter a minimum of three characters';
    }
    return true;
}
        