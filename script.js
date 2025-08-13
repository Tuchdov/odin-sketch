// select the container and slider

const container = document.querySelector('.container');
const slider = document.querySelector('#slider');
// create a nested loop to fit the slider

let row = document.createElement('div');
let col = document.createElement('div');


let btnClassic = document.querySelector('#classic');
let btnEraser = document.querySelector('#eraser');
let btnRainbow = document.querySelector('#rainbow')
let currentMode = 'Classic';

btnClassic.addEventListener('click', () =>{
    currentMode = 'classic';
})
btnEraser.addEventListener('click', () =>{
    currentMode = 'erase';
})
btnRainbow.addEventListener('click', () =>{
    currentMode = 'rainbow';
})


const createGrid = () => {
    const input = slider.value;
    for(i = 0; i < input*input; i++) {
            let square = document.createElement('div');
            square.classList.add('square');
            container.appendChild(square);
            const boxSize = 512 / input; // 'a' was the slider value
            square.style.width = boxSize + 'px';
            square.style.height = boxSize + 'px';
            square.style.boxSizing = 'border-box';
            square.style.border = 'solid black';
            square.addEventListener('mouseover',()=>{
                switch(currentMode) {
                    case 'classic':
                        square.style.backgroundColor = 'DimGrey';
                        break;
                    case 'erase':
                        square.style.backgroundColor = 'White';
                        break;
                    case 'rainbow':
                        let rVal =  Math.floor(Math.random() * 256);
                        let gVal =  Math.floor(Math.random() * 256);
                        let bVal =  Math.floor(Math.random() * 256);
                        const randomColor = `rgb(${rVal}, ${gVal}, ${bVal})`;
                        square.style.backgroundColor = `${randomColor}`;
                        break;
                    default:
                        square.style.backgroundColor = 'DimGrey';
            }
    })

    }}
 

const emptyGrid = () => {
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

const handleSliderChange = () => {
    emptyGrid();
    createGrid();
}

slider.addEventListener('change', handleSliderChange);
