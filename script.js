// select the container

const container = document.querySelector('.container');

// create a nested loop to fit the slider
function createGrid() {
    for (let i = 0; i < (slider.value * slider.value); i++) {
        const grid = document.createElement('div');
        let a = slider.value;
        const boxSize = 250 / a; // creates the dynamic squeres
        grid.classList.add('grid');
        grid.style.width = boxSize + 'px';
        grid.style.height = boxSize + 'px';
        container.appendChild(grid);
    }
}

const createGrid = () => {
    
}
 