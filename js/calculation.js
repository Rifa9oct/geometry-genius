// Triangle
function calculateTriangleArea(){
    const base = getInputFieldValue('base1');
    const height = getInputFieldValue('height1');
    const area = 0.5 * base * height;
    setElementText('triangle-area', area);
    appendLi('Triangle',area); 
} 

// Rectangle
function calculateRectangleArea(){
    const width = getInputFieldValue('width');
    const length = getInputFieldValue('length');
    const area = width * length;
    setElementText('rectangle-area', area); 
    appendLi('Rectangle',area); 
} 

// Parallelogram
function calculateParallelogramArea(){
    const base = getInputFieldValue('base2');
    const height = getInputFieldValue('height2');
    const area = base * height;
    setElementText('parallelogram-area', area); 
    appendLi('Parallelogram',area); 
}

// Ellipse
function calculateEllipseArea(){
    const a = getInputFieldValue('a');
    const b = getInputFieldValue('b');
    const area = 3.1416 * a * b;
    setElementText('ellipse-area', area);
    appendLi('Ellipse',area);  
} 

function getInputFieldValue(elementId){
    const element = document.getElementById(elementId);
    const elementValueString = element.value;
    const elementValue = parseFloat(elementValueString);
    element.value = '';
    return elementValue;  
}

function  setElementText(setId,setValue){
    const setArea = document.getElementById(setId);
    setArea.innerText = setValue;
}

function appendLi(name,value){
    const li = document.createElement('li');
    li.innerText = name + ' ' + 'Area' + ' = ' + value + " cm";
    document.getElementById('areaContainer').appendChild(li);
}
