const gridContainer = document.querySelector('.grid-container');
const gridSizeBtn = document.querySelector('#grid-size-btn');
const inputSizeGrid = document.querySelector('#grid-size');
const inputFeedback = document.querySelector('#input-feedback');

// Turn an element of the grid black when mouseovered
const turnBlack = (element) => {
	return (element.style.backgroundColor = 'black');
};

// Function to create any grid given a size
const createGrid = (size) => {
	let arrayOfDivs = [];

	for (i = 0; i < size * size; i++) {
		let oneSquare = document.createElement('div');
		oneSquare.setAttribute('class', 'square-div');
		/* oneSquare.textContent = i + 1; */
		oneSquare.addEventListener('mouseover', (e) => turnBlack(e.target));
		arrayOfDivs.push(oneSquare);
	}

	return arrayOfDivs;
};

// Add an EventListener to the "Add Grid" button to generate a grid
gridSizeBtn.addEventListener('click', () => {
	gridContainer.textContent = '';
	const createdGrid = createGrid(inputSizeGrid.value);
	inputFeedback.textContent = `A grid of size ${inputSizeGrid.value} by ${inputSizeGrid.value} has been generated!`;
	let gridWidth = inputSizeGrid.value * 16;
	let gridHeight = gridWidth;
	gridContainer.style.width = `${gridWidth}px`;
	gridContainer.style.height = `${gridHeight}px`;
	gridContainer.append(...createdGrid);
});
