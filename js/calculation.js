// Triangle
function calculateTriangleArea(){
    const base = getInputFieldValue('base1');
    const height = getInputFieldValue('height1');
    const area = 0.5 * base * height;
    setElementText('triangle-area', area); 
} 

// Rectangle
function calculateRectangleArea(){
    const width = getInputFieldValue('width');
    const length = getInputFieldValue('length');
    const area = width * length;
    setElementText('rectangle-area', area); 
} 

// Parallelogram
function calculateParallelogramArea(){
    const base = getInputFieldValue('base2');
    const height = getInputFieldValue('height2');
    const area = base * height;
    setElementText('parallelogram-area', area); 
}

// Ellipse
function calculateEllipseArea(){
    const a = getInputFieldValue('a');
    const b = getInputFieldValue('b');
    const area = 3.1416 * a * b;
    setElementText('ellipse-area', area); 
} 

function getInputFieldValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);
    return elementValue;
}

function  setElementText(setId,setValue){
    const setArea = document.getElementById(setId);
    setArea.innerText = setValue;
}