const writeFile = require(fs);
const shape = require('./shape');

function createLogo(data) {

    let shape = new createLogo (data.shapeColor, data.textColor, data.chars).getShape(data.shape);
    writeFile('.ex/logos.svg', shape.render(), ()=> console.log("successful"));
}

exports.createLogo = createLogo;
