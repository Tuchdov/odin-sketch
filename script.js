// select the container and slider

const container = document.querySelector('.container');
const slider = document.querySelector('#slider');
const sliderValueDisplay = document.querySelector('#slider-value');



let row = document.createElement('div');
let col = document.createElement('div');


// Buttons and mode setup
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
            square.addEventListener('mouseovers',()=>{
                switch(currentMode) {
                    case 'classic':
                        square.style.backgroundColor = '#34495e';
                        break;
                    case 'erase':
                        square.style.backgroundColor = 'White';
                        break;
                    case 'rainbow':
                        let r =  Math.floor(Math.random() * 256);
                        let g =  Math.floor(Math.random() * 256);
                        let b =  Math.floor(Math.random() * 256);
                        const randomColor = `rgb(${r}, ${g}, ${b})`;
                        square.style.backgroundColor = `${randomColor}`;
                        break;
                    default:
                        square.style.backgroundColor = '#34495e';
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

// ADDED: Updates the 'NxN' text display in real-time
const updateSliderDisplay = () => {
    sliderValueDisplay.textContent = `${slider.value}x${slider.value}`;
};


// 'input' fires continuously as the user drags the slider
slider.addEventListener('input', updateSliderDisplay);

// 'change' fires only when the user releases the slider
slider.addEventListener('change', handleSliderChange);

// --- Initial Setup on Page Load ---
// Ensures the grid and text are correct when the page first loads
document.addEventListener('DOMContentLoaded', () => {
    updateSliderDisplay();
    createGrid();
});