const { Square, Triangle, Circle } = require('./shapes');


const generateSVG = ({ characters, charColor, shape, shapeColor}) => {
    
    let svgShape;
    if (shape === 'Square') svgShape = new Square(shapeColor)
    else if (shape === 'Triangle') svgShape = new Triangle(shapeColor)
    else svgShape = new Circle(shapeColor)
    
   

    let svg = `
    <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">
    ${svgShape.render()}
    <text x="150" y="125" font-size="60" font-family="Arial, Helvetica, sans-serif" text-anchor="middle" fill="${charColor}">${characters}</text>
    </svg>
    `

    
    return svg;

}






module.exports = SVG